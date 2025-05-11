import * as SecureStore from 'expo-secure-store';
import { encode as btoa, decode as atob } from 'base-64';

// Simple XOR encryption for demonstration (replace with a stronger method for production)
const ENCRYPTION_KEY = 'lifevault-key';

function xorEncrypt(text: string, key: string): string {
  return btoa(
    text
      .split('')
      .map((char, i) =>
        String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
      )
      .join('')
  );
}

function xorDecrypt(encoded: string, key: string): string {
  const text = atob(encoded);
  return text
    .split('')
    .map((char, i) =>
      String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    )
    .join('');
}

export async function setSecureItem(key: string, value: string): Promise<void> {
  const encrypted = xorEncrypt(value, ENCRYPTION_KEY);
  await SecureStore.setItemAsync(key, encrypted, {
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  });
}

export async function getSecureItem(key: string): Promise<string | null> {
  const encrypted = await SecureStore.getItemAsync(key);
  if (!encrypted) return null;
  return xorDecrypt(encrypted, ENCRYPTION_KEY);
}

export async function deleteSecureItem(key: string): Promise<void> {
  await SecureStore.deleteItemAsync(key);
} 