# Install Windows 11 on Raspberry Pi 5 with QEMU
*Revision 2024-12-11 11:43AM CET*

&nbsp;

In this documentation I will guide you through all the steps to install **Windows 11** on your **Raspberry Pi 5** using **QEMU**.

&nbsp;

## Why?

The Raspberry Pi was designed to be used with Linux. Unfortunately, Windows doesn't have full support for ARM processors these days, which is why it can't run Windows natively in a decent way.

The problem? Drivers. There are currently no official drivers for the Raspberry Pi 5.

There is a fantastic project that is trying to enable Windows to run on Raspberry Pi devices. The project in question is called **WorProject** and I really hope it continues to progress. The link is available [here](https://github.com/worproject).

Unfortunately, this is not enough. It cannot offer an optimal experience because a large part of the drivers are not available.

It is not easy to create a driver without a source code to draw from, and it is also a huge financial cost because the drivers must be tested and digitally signed. Microsoft unfortunately (or fortunately) imposes very strict rules for the creation of drivers.

&nbsp;

## The solution

This is where this project was born. To be able to use Windows emulated inside a Linux host OS that works correctly with the Raspberry Pi peripherals.

I'm trying this method and I have to say that I'm really enjoying it. The experience is acceptable considering the virtualization and hardware of the Raspberry Pi 5.

&nbsp;

## Getting Started

To get started you will need a few things.

* The Raspberry Pi 5;
* A Micro SD card or a SSD drive with more than **64 GB** of space;
* A PC which you will use to write Linux to the drive;
* A Micro SD card reader (if you are using the Micro SD as drive);
* An Ethernet or WiFi connection;
* An ISO of **Windows 11 ARM64**;
* VirtIO drivers for Windows;
* A VNC client to connect to the VM;
* A supported UEFI Bios (continue reading and I will provide you with the link to download it);
* A little patience.