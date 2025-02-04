import { useState } from 'react';
import { terminalConfig } from '../config/terminal';

interface Command {
  input: string;
  output: string;
}

export function useTerminal() {
  const [commands, setCommands] = useState<Command[]>([]);
  const [input, setInput] = useState('');

  const handleCommand = (cmd: string) => {
    if (cmd === 'clear') {
      setCommands([]);
    } else {
      setCommands(prev => [...prev, { input: cmd, output: cmd }]);
    }
    setInput('');
  };

  return {
    commands,
    input,
    setInput,
    handleCommand,
    config: terminalConfig
  };
}