import 'package:flutter/material.dart';

void main() {
  runApp(const KreoAssistApp());
}

class KreoAssistApp extends StatelessWidget {
  const KreoAssistApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'KreoAssist',
      theme: ThemeData.dark().copyWith(
        primaryColor: Colors.redAccent,
        scaffoldBackgroundColor: const Color(0xFF121212),
      ),
      home: const SOSDashboard(),
    );
  }
}

class SOSDashboard extends StatelessWidget {
  const SOSDashboard({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("KreoAssist - Mesh Mode")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.warning_amber_rounded, size: 80, color: Colors.orange),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.red,
                padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 20),
              ),
              child: const Text("SOS - REQUEST HELP"),
            ),
          ],
        ),
      ),
    );
  }
}
