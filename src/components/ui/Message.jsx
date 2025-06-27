'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Chip } from '@/components/ui/Chip';

export const Message = ({ show, message }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 120 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-x-0 bottom-0 p-10 flex justify-center z-[9999] bg-gradient-to-t from-black/50 to-transparent"
        >
          <Chip size="md">
            <p className="text-white">{message}</p>
          </Chip>
        </motion.div>
      )}
    </AnimatePresence>
  );
};