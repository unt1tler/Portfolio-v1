import React, { useRef, useEffect } from 'react';
import { ChevronRight, Terminal as TerminalIcon } from 'lucide-react';
import { useTerminal } from '../hooks/useTerminal';
import { CommandOutput } from './terminal/CommandOutput';
import { motion } from 'framer-motion';

export function Terminal() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const { commands, input, setInput, handleCommand, config } = useTerminal();

  useEffect(() => {
    const terminal = terminalRef.current;
    if (!terminal) return;

    const handleScroll = () => {
      const isAtBottom = terminal.scrollHeight - terminal.scrollTop === terminal.clientHeight;
      if (isAtBottom && bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    terminal.addEventListener('scroll', handleScroll);
    return () => terminal.removeEventListener('scroll', handleScroll);
  }, [commands]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full rounded-lg overflow-hidden bg-[#1E1E1E]"
    >
      <div className="flex items-center px-4 py-2 bg-[#2D2D2D] border-b border-[#3D3D3D]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="flex-1 text-center text-sm font-medium text-gray-400">
          <TerminalIcon className="inline-block w-4 h-4 mr-2" />
          Terminal
        </div>
      </div>
      
      <div 
        ref={terminalRef} 
        className="h-[300px] overflow-auto font-mono text-sm p-4 text-gray-100"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {config.welcomeMessage}
        </motion.p>
        
        {commands.map((command, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="mt-4"
          >
            <div className="flex items-center">
              <span className="text-green-400">guest@portfolio</span>
              <span className="text-gray-400 mx-1">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-400 mx-1">$</span>
              <span className="ml-2">{command.input}</span>
            </div>
            <div className="mt-2">
              <CommandOutput command={command.output} />
            </div>
          </motion.div>
        ))}
        
        <div className="mt-4 flex items-center">
          <span className="text-green-400">guest@portfolio</span>
          <span className="text-gray-400 mx-1">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-gray-400 mx-1">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && input.trim()) {
                handleCommand(input.trim());
              }
            }}
            className="ml-2 bg-transparent border-none outline-none flex-1 text-gray-100"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
}