import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaCode } from "react-icons/fa";

const VisionSection = ({
  title = "Our Vision",
  subtitle = "Who We Are",
  quote = `"It is impossible for a man to learn what he thinks already knows."`,
  introText = `Join us in shaping the future of the web. Let's code, build, and innovate together—because the best way to predict the future is to create it.`,
  leftParagraph,
  rightParagraph,
  illustration,
}) => {
  return (
    <section className="lg:px-[70px] px-6 pb-28  font-[poppins]">
      
      {/* Heading */}
      <motion.div 
        className="space-y-3 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="font-semibold text-lg text-blue-600 flex items-center gap-2">
          <FaLightbulb className="text-yellow-500" />
          {title}
        </p>
        <h1 className="font-semibold text-4xl lg:text-5xl">{subtitle}</h1>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-8 max-w-4xl"
      >
        <h2 className="font-semibold text-xl lg:text-2xl leading-relaxed italic text-gray-800">
          {quote}
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed text-lg">
          {introText}
        </p>
      </motion.div>

      {/* Illustration (optional) */}
      {illustration && (
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img 
            src={illustration} 
            alt="Vision Illustration" 
            className="max-w-xl w-full drop-shadow-xl rounded-lg"
          />
        </motion.div>
      )}

      {/* Two Columns */}
      <motion.div
        className="mt-16 flex flex-col lg:flex-row gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="lg:w-1/2 space-y-4 text-gray-700 leading-relaxed text-lg">
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            <FaUsers />
            Community & Growth
          </div>
          <p>{leftParagraph}</p>
        </div>

        <div className="lg:w-1/2 space-y-4 text-gray-700 leading-relaxed text-lg">
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            <FaCode />
            Real Skills, Real Impact
          </div>
          <p>{rightParagraph}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default VisionSection;
