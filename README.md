# Multi-factor Authentication in ATM with Fraud Alerting System

## Authors
- Mayukh Paul
- Ritushree Dutta
- Pavan Prabhu G
- Laxman Gupta

**Department of Computer Science, Bangalore Technological Institute, Bengaluru**

## Abstract
This project proposes the design and implementation of a multi-factor authentication system in ATMs, integrated with a fraud alerting system. The traditional card-and-PIN authentication system used by most ATMs is no longer secure enough due to the rise in ATM frauds. To address this issue, we introduce a three-factor authentication method that includes biometric verification along with card and PIN entry. In addition, the system has a built-in fraud detection mechanism that triggers alerts to nearby authorities in case of suspicious activity.

## Index Terms
- Authentication
- Card
- PIN Authentication
- Biometric Authentication
- ATM
- Embedded System
- Three-factor Authentication
- Alert System

## Introduction
The security of ATM systems has become a pressing concern as criminals develop more sophisticated techniques to commit fraud. Traditional authentication methods like card-and-PIN are increasingly vulnerable to attacks. This project aims to enhance ATM security by incorporating three-factor authentication, including biometric verification, to significantly reduce the chances of unauthorized access. The system also features a fraud alert mechanism to notify authorities in real-time if suspicious activity is detected.

## Problem Statement
With the rapid advancement of technology, ATM fraud has become a significant issue for financial institutions. Traditional security measures, such as card-and-PIN authentication, are no longer sufficient to protect against sophisticated fraud techniques like skimming, PIN theft, and card jamming. This project proposes a three-factor authentication system that adds biometric verification to the existing card-and-PIN authentication process, providing a stronger defense against ATM fraud.

## Related Literature
- **Biometric Authentication**: The use of biometric traits, such as fingerprints or facial recognition, offers a more secure and reliable authentication method compared to traditional passwords or PINs.
- **Two-factor Authentication**: Enhances security by requiring two means of identification, typically a physical token (card) and something memorized (PIN).
- **Three-factor Authentication**: Adds another layer of security by incorporating something unique to the user, such as a fingerprint.

## ATM Frauds
The project addresses various types of ATM fraud, such as:
- **Shoulder Surfing**
- **Lebanese Loop**
- **Card Jamming**
- **Skimming**
- **Card Swapping**
- **Relay Attacks**

## Proposed System
The system incorporates four input devices:
1. **Fingerprint Sensor**: First layer of authentication.
2. **Card Reader**: Secondary layer for user identification.
3. **Scrambling Numpad**: Prevents shoulder surfing by randomizing the numbers on the keypad.
4. **Color Sequence Keypad**: Additional layer of security for transactions over a threshold amount.

Additionally, the system features:
- **GPS Module**: Provides location data in case of fraud.
- **GPRS Module**: Sends real-time alerts to nearby authorities.
- **Camera Module**: Captures images of users for verification.

## Authentication Algorithm
1. User places finger on the fingerprint sensor.
2. If fingerprint verification fails, user enters their card as a fallback.
3. User enters their PIN using a scrambling numpad.
4. For high-value transactions, the user inputs a color sequence password.
5. If authentication fails, the system alerts the nearest police station with the user's photo and location data.

## Conclusion
The proposed multi-layered security system enhances ATM security by combining biometric verification with traditional methods and incorporating a fraud alert system. This approach can significantly reduce the risk of fraud and ensure a safer banking experience for customers.

## References
- Adeloye, L.A., "E-banking as new frontiers for banks," Sunday punch (Nigeria), 14 September, 2008 P.25.
- Anil K. Jain and Karthik Nandakumar, "Biometric authentication: system security and user privacy," Published by the IEEE Computer Society, November, 2012.
- Brunner, A., Decressin, J. & Kudela, B., "Germany’s three-pillar banking system – cross-country perspectives in Europe," Occasional Paper, International Monetary Fund, Washington DC., 2004.
- **[More references in the full paper]**

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/atm-multifactor-authentication.git
