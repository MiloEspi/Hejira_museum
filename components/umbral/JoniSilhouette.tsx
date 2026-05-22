"use client";

import { motion } from "framer-motion";

export default function JoniSilhouette() {
  return (
    <motion.div
      className="relative w-[min(520px,70vw)] h-[min(620px,80vh)]"
      style={{ filter: "drop-shadow(0 0 40px rgba(232, 238, 240, 0.12))" }}
    >
      <svg
        viewBox="0 0 400 520"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-label="Silhouette of Joni Mitchell skating with cape spread like crow wings"
      >
        <defs>
          <radialGradient id="ice-glow" cx="50%" cy="90%" r="40%">
            <stop offset="0%" stopColor="rgba(200, 214, 221, 0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Ice reflection glow */}
        <ellipse cx="200" cy="470" rx="120" ry="15" fill="url(#ice-glow)" />

        {/* Cape — left wing */}
        <motion.g
          animate={{
            skewX: [0, -2.5, 0, 1.5, 0],
            scaleX: [1, 1.02, 1, 0.99, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "200px 190px" }}
        >
          <path
            d="M 198 185 Q 145 195 105 260 Q 80 310 65 360 Q 55 395 60 420 Q 65 435 80 430 Q 95 425 108 415 Q 120 408 128 395 L 195 355 Z"
            fill="#0a0a0a"
            opacity="0.97"
          />
          {/* Cape fabric folds — left */}
          <path
            d="M 150 270 Q 130 310 115 355 Q 105 380 108 400"
            stroke="#1a1a1a"
            strokeWidth="1.2"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M 170 250 Q 155 300 140 350 Q 135 375 138 395"
            stroke="#1a1a1a"
            strokeWidth="0.8"
            fill="none"
            opacity="0.3"
          />
          {/* Cape ragged edge — left */}
          <path
            d="M 60 420 Q 55 428 62 435 Q 70 430 78 432 Q 85 428 90 433 Q 98 425 105 428 Q 112 420 118 425 Q 125 418 128 395"
            stroke="#0a0a0a"
            strokeWidth="2"
            fill="#0a0a0a"
          />
        </motion.g>

        {/* Cape — right wing */}
        <motion.g
          animate={{
            skewX: [0, 2, 0, -1.8, 0],
            scaleX: [1, 1.01, 1, 1.03, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
          style={{ transformOrigin: "200px 190px" }}
        >
          <path
            d="M 202 185 Q 255 195 295 260 Q 320 310 335 360 Q 345 395 340 420 Q 335 435 320 430 Q 305 425 292 415 Q 280 408 272 395 L 205 355 Z"
            fill="#0a0a0a"
            opacity="0.97"
          />
          {/* Cape fabric folds — right */}
          <path
            d="M 250 270 Q 270 310 285 355 Q 295 380 292 400"
            stroke="#1a1a1a"
            strokeWidth="1.2"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M 230 250 Q 245 300 260 350 Q 265 375 262 395"
            stroke="#1a1a1a"
            strokeWidth="0.8"
            fill="none"
            opacity="0.3"
          />
          {/* Cape ragged edge — right */}
          <path
            d="M 340 420 Q 345 428 338 435 Q 330 430 322 432 Q 315 428 310 433 Q 302 425 295 428 Q 288 420 282 425 Q 275 418 272 395"
            stroke="#0a0a0a"
            strokeWidth="2"
            fill="#0a0a0a"
          />
        </motion.g>

        {/* Body — torso and long skirt */}
        <path
          d="M 190 200 L 188 340 Q 186 380 190 405 Q 195 415 200 418 Q 205 415 210 405 Q 214 380 212 340 L 210 200 Z"
          fill="#0a0a0a"
        />

        {/* Head */}
        <ellipse cx="200" cy="155" rx="18" ry="21" fill="#0a0a0a" />

        {/* Hair — long, wind-blown slightly */}
        <path
          d="M 182 142 Q 178 128 186 120 Q 196 113 210 116 Q 222 120 220 132 Q 218 145 222 162 Q 225 175 230 185 Q 220 178 210 175 Q 200 173 190 175 Q 180 178 175 185 Q 178 172 180 160 Q 182 150 182 142 Z"
          fill="#0a0a0a"
        />
        {/* Wispy hair strand */}
        <path
          d="M 225 165 Q 232 172 238 168 Q 235 178 228 182"
          stroke="#0a0a0a"
          strokeWidth="2"
          fill="none"
        />

        {/* Arms outstretched — left */}
        <path
          d="M 190 218 Q 160 212 130 225 Q 108 235 90 248"
          stroke="#0a0a0a"
          strokeWidth="5.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Left hand/fingers */}
        <path
          d="M 90 248 Q 85 250 82 253 M 90 248 Q 87 252 86 256 M 90 248 Q 89 253 90 257"
          stroke="#0a0a0a"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Arms outstretched — right */}
        <path
          d="M 210 218 Q 240 212 270 225 Q 292 235 310 248"
          stroke="#0a0a0a"
          strokeWidth="5.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Right hand/fingers */}
        <path
          d="M 310 248 Q 315 250 318 253 M 310 248 Q 313 252 314 256 M 310 248 Q 311 253 310 257"
          stroke="#0a0a0a"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Legs — skating stance, one forward */}
        <path
          d="M 195 405 Q 192 425 188 440 Q 185 450 183 455"
          stroke="#0a0a0a"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 205 405 Q 210 425 218 440 Q 222 448 225 452"
          stroke="#0a0a0a"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Skate boots */}
        <path d="M 175 453 Q 180 460 185 460 L 192 458 Q 188 452 183 455 Z" fill="#0a0a0a" />
        <path d="M 233 450 Q 228 458 222 458 L 216 455 Q 220 450 225 452 Z" fill="#0a0a0a" />

        {/* Skate blades — thin metallic lines */}
        <line x1="172" y1="461" x2="196" y2="459" stroke="#c8d6dd" strokeWidth="1.5" opacity="0.6" />
        <line x1="212" y1="456" x2="237" y2="451" stroke="#c8d6dd" strokeWidth="1.5" opacity="0.6" />

        {/* Ice scratch marks */}
        <path
          d="M 165 465 Q 175 467 190 464 Q 200 462 210 464"
          stroke="rgba(200, 214, 221, 0.15)"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M 210 458 Q 225 455 240 453 Q 250 452 255 454"
          stroke="rgba(200, 214, 221, 0.12)"
          strokeWidth="0.8"
          fill="none"
        />

        {/* Subtle ice reflection of figure */}
        <ellipse cx="200" cy="475" rx="45" ry="4" fill="#0a0a0a" opacity="0.08" />
      </svg>
    </motion.div>
  );
}
