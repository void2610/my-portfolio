"use client";

import { motion } from "framer-motion";
import { Button, Card, CardBody } from "@heroui/react";
import { Gamepad, Code, Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
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
          <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
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
              href="/about"
              size="lg"
              variant="bordered"
              className="border-primary text-primary hover:bg-surface-elevated font-semibold backdrop-blur-sm"
            >
              About Me
            </Button>
            <Button 
              as={Link}
              href="/contact"
              size="lg"
              variant="ghost"
              className="text-primary hover:bg-surface-elevated font-semibold"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-tertiary text-lg mb-8">
            私のスキルや経験について詳しく知りたい方は<Link href="/about" className="text-primary hover:text-secondary underline">About</Link>ページを、
            <br />
            これまでの作品をご覧になりたい方は<Link href="/projects" className="text-primary hover:text-secondary underline">Projects</Link>ページをご確認ください。
          </p>
          
          <div className="flex justify-center space-x-8 text-tertiary">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <Gamepad className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm">Game Dev</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm">Software Eng</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm">Innovation</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
