<div align="center">

# 🚨 KreoAssist
### Offline-First Disaster Management & Emergency Assistance System

[![Status](https://img.shields.io/badge/Status-Prototype-orange)]()
[![License](https://img.shields.io/badge/License-MIT-blue)]()
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile-green)]()

**🌐 Live Demo:** [kreoassist-web.netlify.app](https://kreoassist-web.netlify.app/)

<p align="center">
  <img src="screenshots/system_architecture.png" width="800" alt="System Architecture">
</p>

</div>

---

## 📌 Overview

**KreoAssist** is a resilient, offline-first emergency response application designed for critical situations where centralized communication infrastructure fails (e.g., floods, earthquakes, or mass network outages). 

It empowers communities with **decentralized mesh communication**, **on-device hybrid AI**, and **vital emergency tools** that work completely without the internet.

> **"When the network goes down, KreoAssist wakes up."**

---

## 🌟 Key Capabilities

### 📡 Offline Mesh Network
No internet? No problem.
*   **Device-to-Device:** Communicate via Bluetooth & Wi-Fi Direct.
*   **Broadcast Alerts:** Send "NEED HELP" or "I'M SAFE" signals to nearby devices.
*   **Background Scanning:** Detects peers even when the phone is locked.

### 🧠 Hybrid AI Assistant
Smart guidance, online or offline.
*   **Zero-Internet Inference:** Switch seamlessly to on-device models when offline.
*   **First-Aid Guidance:** Immediate instructions for CPR, fractures, and burns.
*   **Privacy First:** Sensitive health data stays on your device.

### 🆘 One-Tap SOS Dashboard
Immediate response in milliseconds.
*   **Direct Emergency Calls:** Instant dialing for Police (100), Fire (101), Ambulance (102).
*   **GPS SMS Alerts:** Auto-sends live coordinates to trusted contacts.
*   **Digital Medical ID:** Vital info (Blood Group, Allergies) accessible on lock screen.

---

## 📸 Project Showcase

| **Mesh Network** | **AI Assistant** |
|:---:|:---:|
| <img src="screenshots/mesh_network.jpg" width="300" /> | <img src="screenshots/ai_assistant.jpg" width="300" /> |
| *Scanning for nearby devices without internet* | *Hybrid AI providing medical guidance* |

| **SOS Dashboard** | **Medical ID** |
|:---:|:---:|
| <img src="screenshots/sos_dashboard1.jpg" width="300" /> | <img src="screenshots/digital_medical_id1.jpg" width="300" /> |
| *One-tap emergency triggers* | *Critical health info for rescuers* |

---

## 🧩 System Architecture

The system is built on a modular architecture ensuring separation of concerns between the UI, Logic, and distinct System Services.

> **Round 1:** Core Functional Prototype
> <br/>
> <img src="screenshots/system_flow.png" width="600" />

> **Round 2:** Scaled Ecosystem (Planned)
> <br/>
> <img src="screenshots/round2_architecture.png" width="600" />

---

## 🛠️ Tech Stack

*   **Frontend:** React / React Native (Expo)
*   **State Management:** Context API & Custom Hooks
*   **Offline Storage:** Async Storage / LocalStorage wrapper
*   **Services:** Simulated Bluetooth/Wi-Fi Direct Mesh Layer

---

## 👥 Kreodev Team Contributors

| Member | GitHub | Role | Contribution Area |
| :--- | :--- | :--- | :--- |
| **Bhavesh** | [`workbhaveshpandey-create`](https://github.com/workbhaveshpandey-create) | **Logic Lead** | Hooks & Core App Loop |
| **Gaurav** | [`SGarryy`](https://github.com/SGarryy) | **Backend** | API & Storage Services |
| **Aastha** | [`gehuaastha2008-ux`](https://github.com/gehuaastha2008-ux) | **UI/UX** | Design System & Components |
| **Kalpana** | [`kalpana1957`](https://github.com/kalpana1957) | **Features** | Page Sections & Layouts |

---

<div align="center">
  <sub>©️ 2025 Kreodev. Built for Resilience.</sub>
</div>
