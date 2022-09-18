import { CLPublicKey } from './CLValue/';
import { AsymmetricKey } from './Keys';
/**
 * Method for formatting messages with Casper header.
 * @param message The string to be formatted.
 * @returns The bytes of the formatted message
 */
export declare const formatMessageWithHeaders: (message: string) => Uint8Array;
/**
 * Method for signing string message.
 * @param key AsymmetricKey used to sign the message
 * @param message Message that will be signed
 * @return Uint8Array Signature in byte format
 */
export declare const signRawMessage: (key: AsymmetricKey, message: string) => Uint8Array;
/**
 * Method for signing formatted message in bytes format.
 * @param key AsymmetricKey used to sign the message
 * @param formattedMessageBytes Bytes of the formatted message. (Strings can be formatted using the `formatMessageWithHeaders()` method)
 * @returns Uint8Array Signature in byte format
 */
export declare const signFormattedMessage: (key: AsymmetricKey, formattedMessageBytes: Uint8Array) => Uint8Array;
/**
 * Method to verify signature
 * @param key Public key of private key used to signed.
 * @param message Message that was signed
 * @param signature Signature in byte format
 * @return boolean Verification result
 */
export declare const verifyMessageSignature: (key: CLPublicKey, message: string, signature: Uint8Array) => boolean;
