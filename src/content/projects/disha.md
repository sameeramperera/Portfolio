---
title: Disha
description: Android app that shows Google Maps turn-by-turn navigation on the TVS Raider bike cluster.
tags: [Java, Android, Bluetooth LE]
github: https://github.com/sameeramperera/Disha
live: https://sameeramperera.github.io/Disha
featured: true
order: 3
---

TVS Connect, the official app for the TVS Raider bike, can show directions on the bike's cluster, but its maps are often not accurate enough: wrong turns, missing roads, and routes that don't match what Google Maps would take. Disha (දිශා, "directions" in Sinhala) puts Google Maps' directions on the cluster instead. It reads Google Maps' navigation notification, works out the turn from the shape of its arrow, and sends it to the bike over Bluetooth LE in the same format TVS's own app uses.

<p style="display: flex; gap: 2%;">
  <img src="https://sameeramperera.github.io/Disha/screens/home-dark.png" style="width: 32%;" alt="Disha's Home screen while navigating: next turn, time left, fuel, mileage, battery, gear, ride mode and speed">
  <img src="https://sameeramperera.github.io/Disha/screens/analytics-dark.png" style="width: 32%;" alt="Disha's Analytics screen: distance for the week, rides, riding time, speeds, mileage and a distance chart">
  <img src="https://sameeramperera.github.io/Disha/screens/records-dark.png" style="width: 32%;" alt="Disha's Records screen: the fuel fill-up form with date, time, shed, litres, price and how you paid">
</p>

## Features

- **Google Maps on the cluster**: The next turn, the distance to it and the time left show on the bike's own screen, with no separate maps or account.
- **Connects by itself**: Connects when navigation starts, and reconnects within seconds after the ignition goes off and on.
- **Live bike data**: Engine RPM, gear, ECO or POWER mode, fuel, odometer, trip B, mileage and battery voltage, read from the bike.
- **Alerts**: Vibrates at a set speed or RPM, warns when fuel runs low, and shows incoming callers on the cluster.
- **Ride history and analytics**: Records every ride, with distance, speed, mileage, gear and RPM stats by week, month, year or all time.
- **Fuel and service records**: Logs fill-ups and services, reminds you the day before the next service, and shows the cost per km.
- **Private**: No internet permission. Everything stays on the phone.
