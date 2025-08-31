import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { FC, useRef, useState } from "react";

type FAQCollapsibleProps = {
  question: string;
  answer: string;
};

export const FAQCollapsible: FC<FAQCollapsibleProps> = ({
  question,
  answer,
}) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer my-2">
      {/* Header */}
      <div
        className="flex items-center justify-between px-6 py-4"
        onClick={() => setOpen((prev) => !prev)}
      >
        <h3 className="text-xl font-medium text-gray-900">{question}</h3>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Plus className="w-5 h-5 text-gray-500" />
        </motion.div>
      </div>

      {/* Animated Answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: contentRef.current?.scrollHeight || "auto",
              opacity: 1,
            }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="px-6 overflow-hidden"
          >
            <div ref={contentRef} className="pb-6 text-left">
              <p className="text-lg text-gray-600">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
