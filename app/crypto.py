import os
from pathlib import Path
from cryptography.fernet import Fernet

KEY_FILE = Path(__file__).resolve().parent.parent / ".secret.key"


def get_or_create_key() -> bytes:
    """Load or generate the encryption key."""
    env_key = os.environ.get("REDIS_INSIGHT_SECRET_KEY")
    if env_key:
        return env_key.encode("utf-8")

    if KEY_FILE.exists():
        return KEY_FILE.read_bytes().strip()

    new_key = Fernet.generate_key()
    KEY_FILE.write_bytes(new_key)
    try:
        os.chmod(KEY_FILE, 0o600)
    except Exception:
        pass
    return new_key


_cipher = None


def get_cipher() -> Fernet:
    global _cipher
    if _cipher is None:
        key = get_or_create_key()
        _cipher = Fernet(key)
    return _cipher


def encrypt_secret(plain_text: str) -> str:
    """Encrypt a plain text string into a token."""
    if not plain_text:
        return ""
    cipher = get_cipher()
    return cipher.encrypt(plain_text.encode("utf-8")).decode("utf-8")


def decrypt_secret(cipher_text: str) -> str:
    """Decrypt a token back into plain text."""
    if not cipher_text:
        return ""
    cipher = get_cipher()
    try:
        return cipher.decrypt(cipher_text.encode("utf-8")).decode("utf-8")
    except Exception as e:
        import logging
        logging.getLogger("redis_insight.crypto").warning(
            f"Failed to decrypt stored password token (encryption key may have changed): {e}"
        )
        return ""
