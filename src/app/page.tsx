"use client";

import { motion } from "framer-motion";
import { Button, Card, CardBody } from "@heroui/react";
import { Gamepad, Code, Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Background light effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Game Creator &<br />
            Software Engineer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            ゲーム開発とソフトウェア開発を通じて、創造的なソリューションを提供します。
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button 
              as={Link}
              href="/projects"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold"
            >
              View Projects
            </Button>
            <Button 
              as={Link}
              href="/contact"
              size="lg"
              variant="bordered"
              className="border-gray-300 text-gray-700 dark:text-gray-300 font-semibold backdrop-blur-sm"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/30 shadow-xl">
            <CardBody className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Gamepad className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Game Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                創造的なゲーム体験を生み出すための開発に取り組んでいます。
              </p>
            </CardBody>
          </Card>
          
          <Card className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/30 shadow-xl">
            <CardBody className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Software Engineering</h3>
              <p className="text-gray-600 dark:text-gray-300">
                効率的で使いやすいソフトウェアソリューションを開発します。
              </p>
            </CardBody>
          </Card>
          
          <Card className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/30 shadow-xl">
            <CardBody className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                新しい技術とアイデアを組み合わせて革新的な解決策を提供します。
              </p>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
