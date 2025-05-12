// import Link from "next/link";
// import { Button } from "../components/ui/button";
// import { ArrowRight, Video } from "lucide-react";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-background">
//       <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
//         <div className="container px-4 md:px-6 flex flex-col items-center">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
//                 AI Video-to-Video Transformation
//               </h1>
//               <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
//                 Transform your videos with advanced AI technology. Upload a source video and get a stylized or enhanced
//                 output in minutes.
//               </p>
//             </div>
//             <div className="space-x-4">
//               <Link href="/transform">
//                 <Button className="bg-primary hover:bg-primary/90">
//                   Get Started <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </Link>
//               <Link href="/pricing">
//                 <Button variant="outline">View Pricing</Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary flex justify-center">
//         <div className="container px-4 md:px-6 flex flex-col items-center">
//           <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="rounded-full bg-primary/10 p-4">
//                 <Video className="h-6 w-6 text-primary" />
//               </div>
//               <div className="space-y-2">
//                 <h3 className="text-xl font-bold">Upload Your Video</h3>
//                 <p className="text-gray-400">Upload your source video through our easy-to-use interface.</p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="rounded-full bg-primary/10 p-4">
//                 <svg
//                   className="h-6 w-6 text-primary"
//                   fill="none"
//                   height="24"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   width="24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
//                   <path d="M12 3a6 6 0 0 1-9 9 9 9 0 0 0 9-9Z" />
//                 </svg>
//               </div>
//               <div className="space-y-2">
//                 <h3 className="text-xl font-bold">AI Transformation</h3>
//                 <p className="text-gray-400">Our AI processes your video using the Hunyuan-Video Model.</p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="rounded-full bg-primary/10 p-4">
//                 <svg
//                   className="h-6 w-6 text-primary"
//                   fill="none"
//                   height="24"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   width="24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                   <polyline points="7 10 12 15 17 10" />
//                   <line x1="12" x2="12" y1="15" y2="3" />
//                 </svg>
//               </div>
//               <div className="space-y-2">
//                 <h3 className="text-xl font-bold">Download Result</h3>
//                 <p className="text-gray-400">Download your transformed video and view your processing history.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client"

import Link from "next/link"
import { Button } from "../components/ui/button"
import { ArrowRight, Video, Sparkles, Download } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      {/* HERO SECTION */}
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                AI Video-to-Video Transformation
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Transform your videos with advanced AI technology. Upload a source video and get a stylized or enhanced
                output in minutes.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/transform">
                <Button className="bg-primary hover:bg-primary/90">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline">View Pricing</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
  <div className="container px-4 md:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold sm:text-4xl">Powerful Features</h2>
      <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
        Experience next-gen AI video transformation with intuitive controls and powerful models.
      </p>
    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="p-6 border rounded-lg bg-muted/30 hover:shadow-xl transition">
        <div className="flex items-center justify-center mb-4">
          <Video className="text-primary w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">Drag & Drop Upload</h3>
        <p className="text-gray-400 text-center">Upload videos instantly with our intuitive drag-and-drop interface.</p>
      </div>

      <div className="p-6 border rounded-lg bg-muted/30 hover:shadow-xl transition">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="text-primary w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">Real-time Preview</h3>
        <p className="text-gray-400 text-center">Preview transformations before processing to fine-tune your output.</p>
      </div>

      <div className="p-6 border rounded-lg bg-muted/30 hover:shadow-xl transition">
        <div className="flex items-center justify-center mb-4">
          <Download className="text-primary w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">High Quality Output</h3>
        <p className="text-gray-400 text-center">Receive HD-quality videos processed with the latest AI models.</p>
      </div>

      <div className="p-6 border rounded-lg bg-muted/30 hover:shadow-xl transition">
        <div className="flex items-center justify-center mb-4">
          <ArrowRight className="text-primary w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">Fast Processing</h3>
        <p className="text-gray-400 text-center">Complete transformations in minutes with GPU-accelerated pipelines.</p>
      </div>

      <div className="p-6 border rounded-lg bg-muted/30 hover:shadow-xl transition">
        <div className="flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            <path d="M12 3a6 6 0 0 1-9 9 9 9 0 0 0 9-9Z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">Model Flexibility</h3>
        <p className="text-gray-400 text-center">Choose from multiple AI styles like cartoon, sketch, and cinematic.</p>
      </div>

      <div className="p-6 border rounded-lg bg-muted/30 hover:shadow-xl transition">
        <div className="flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24">
            <polyline points="4 17 10 11 4 5" />
            <polyline points="12 19 18 13 12 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">History & Logs</h3>
        <p className="text-gray-400 text-center">Access your transformation history and download anytime.</p>
      </div>
    </div>
  </div>
</section>

      {/* FEATURE VIDEO EXAMPLE SECTION */}
      <section className="w-full bg-muted py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8"
          >
            See It In Action
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-3xl rounded-lg overflow-hidden shadow-lg"
          >
            <video
              src="/video.mp4" // Replace with your actual public video path
              autoPlay
              muted
              loop
              controls
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary flex justify-center">
        <div className="container px-4 md:px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 lg:grid-cols-3 lg:gap-12"
          >
            {/* Feature 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center space-y-4 text-center transition-all duration-300"
            >
              <div className="rounded-full bg-primary/10 p-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Upload Your Video</h3>
                <p className="text-gray-400">Upload your source video through our easy-to-use interface.</p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center space-y-4 text-center transition-all duration-300"
            >
              <div className="rounded-full bg-primary/10 p-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">AI Transformation</h3>
                <p className="text-gray-400">Our AI processes your video using the Hunyuan-Video Model.</p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center space-y-4 text-center transition-all duration-300"
            >
              <div className="rounded-full bg-primary/10 p-4">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Download Result</h3>
                <p className="text-gray-400">Download your transformed video and view your processing history.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
