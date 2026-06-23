// Goozone content config — July 2026 Monthly Drop
// Content adapted from June 2026 Content Plan

import c1s0 from "@/assets/goozone/carousels/c1/slide-0.png";
import c1s1 from "@/assets/goozone/carousels/c1/slide-1.png";
import c1s2 from "@/assets/goozone/carousels/c1/slide-2.png";
import c1s3 from "@/assets/goozone/carousels/c1/slide-3.png";
import c1s4 from "@/assets/goozone/carousels/c1/slide-4.png";

import c2s0 from "@/assets/goozone/carousels/c2/slide-0.png";
import c2s1 from "@/assets/goozone/carousels/c2/slide-1.png";
import c2s2 from "@/assets/goozone/carousels/c2/slide-2.png";
import c2s3 from "@/assets/goozone/carousels/c2/slide-3.png";
import c2s4 from "@/assets/goozone/carousels/c2/slide-4.png";

import c3s0 from "@/assets/goozone/carousels/c3/slide-0.png";
import c3s1 from "@/assets/goozone/carousels/c3/slide-1.png";
import c3s2 from "@/assets/goozone/carousels/c3/slide-2.png";
import c3s3 from "@/assets/goozone/carousels/c3/slide-3.png";
import c3s4 from "@/assets/goozone/carousels/c3/slide-4.png";

import c4s0 from "@/assets/goozone/carousels/c4/slide-0.png";
import c4s1 from "@/assets/goozone/carousels/c4/slide-1.png";
import c4s2 from "@/assets/goozone/carousels/c4/slide-2.png";
import c4s3 from "@/assets/goozone/carousels/c4/slide-3.png";
import c4s4 from "@/assets/goozone/carousels/c4/slide-4.png";

import c5s0 from "@/assets/goozone/carousels/c5/slide-0.png";
import c5s1 from "@/assets/goozone/carousels/c5/slide-1.png";
import c5s2 from "@/assets/goozone/carousels/c5/slide-2.png";
import c5s3 from "@/assets/goozone/carousels/c5/slide-3.png";
import c5s4 from "@/assets/goozone/carousels/c5/slide-4.png";

import c6s0 from "@/assets/goozone/carousels/c6/slide-0.png";
import c6s1 from "@/assets/goozone/carousels/c6/slide-1.png";
import c6s2 from "@/assets/goozone/carousels/c6/slide-2.png";
import c6s3 from "@/assets/goozone/carousels/c6/slide-3.png";

import c7s0 from "@/assets/goozone/carousels/c7/slide-0.png";
import c7s1 from "@/assets/goozone/carousels/c7/slide-1.png";
import c7s2 from "@/assets/goozone/carousels/c7/slide-2.png";
import c7s3 from "@/assets/goozone/carousels/c7/slide-3.png";
import c7s4 from "@/assets/goozone/carousels/c7/slide-4.png";

import c8s0 from "@/assets/goozone/carousels/c8/slide-0.png";
import c8s1 from "@/assets/goozone/carousels/c8/slide-1.png";
import c8s2 from "@/assets/goozone/carousels/c8/slide-2.png";
import c8s3 from "@/assets/goozone/carousels/c8/slide-3.png";
import c8s4 from "@/assets/goozone/carousels/c8/slide-4.png";

import c9s0 from "@/assets/goozone/carousels/c9/slide-0.png";
import c9s1 from "@/assets/goozone/carousels/c9/slide-1.png";
import c9s2 from "@/assets/goozone/carousels/c9/slide-2.png";
import c9s3 from "@/assets/goozone/carousels/c9/slide-3.png";
import c9s4 from "@/assets/goozone/carousels/c9/slide-4.png";

import c10s0 from "@/assets/goozone/carousels/c10/slide-0.png";
import c10s1 from "@/assets/goozone/carousels/c10/slide-1.png";
import c10s2 from "@/assets/goozone/carousels/c10/slide-2.png";
import c10s3 from "@/assets/goozone/carousels/c10/slide-3.png";
import c10s4 from "@/assets/goozone/carousels/c10/slide-4.png";

import blog1Banner from "@/assets/goozone/blogs/blog1-banner.png";
import blog1Story from "@/assets/goozone/blogs/blog1-story.png";
import blog2Banner from "@/assets/goozone/blogs/blog2-banner.png";
import blog2Story from "@/assets/goozone/blogs/blog2-story.png";
import blog3Banner from "@/assets/goozone/blogs/blog3-banner.png";
import blog3Story from "@/assets/goozone/blogs/blog3-story.png";
import blog4Banner from "@/assets/goozone/blogs/blog4-banner.png";
import blog4Story from "@/assets/goozone/blogs/blog4-story.png";

import nl1Banner from "@/assets/goozone/newsletters/newsletter.1.png";
import nl2Banner from "@/assets/goozone/newsletters/newsletter.2.png";
import nl3Banner from "@/assets/goozone/newsletters/newsletter.3.png";
import nl4Banner from "@/assets/goozone/newsletters/newsletter.4.png";

import email1Story from "@/assets/goozone/newsletters/email1-story.png";
import email2Story from "@/assets/goozone/newsletters/email2-story.png";
import email3Story from "@/assets/goozone/newsletters/email3-story.png";
import email4Story from "@/assets/goozone/newsletters/email4-story.png";

export type CarouselItem = {
  id: number;
  title: string;
  caption?: string;
  slides: string[];
};

export type BlogItem = {
  id: number;
  title: string;
  preview: string;
  banner: string;
  story: string;
  docUrl: string;
};

export type NewsletterItem = {
  id: number;
  title: string;
  preview: string;
  banner: string;
  story: string;
  docUrl: string;
  body: string;
  ctaUrl: string;
  ctaText: string;
};

export const carousels: CarouselItem[] = [
  {
    id: 1,
    title: "Stop selling from DMs. Get your real online store today — FREE 🇹🇹",
    caption:
      "Still taking orders through Instagram DMs in 2026? There's a better way. Your customers deserve a real store. Get yours free at goozone.com — no tech skills, no commitment. 👆🛒\n→ Start FREE: https://goozone.com/sell",
    slides: [c1s0, c1s1, c1s2, c1s3, c1s4],
  },
  {
    id: 2,
    title: "You're not a delivery driver. Stop acting like one.",
    caption:
      "You're not a delivery driver. But if you're selling online in Trinidad right now, you're spending more time driving than selling. Let Goozone handle the road so you can focus on growing. 🚛💨\n→ Start FREE: https://goozone.com/sell",
    slides: [c2s0, c2s1, c2s2, c2s3, c2s4],
  },
  {
    id: 3,
    title: "POV: You just got an order and didn't have to deliver it yourself.",
    caption:
      "POV: You just got an order and didn't have to deliver it yourself. That's Goozone. Your store. Your sales. Our delivery. 🚛\n→ Start FREE: https://goozone.com/sell",
    slides: [c3s0, c3s1, c3s2, c3s3, c3s4],
  },
  {
    id: 4,
    title: "Still taking orders through Instagram DMs in 2026?",
    caption:
      "Still selling from DMs in 2026? Your customers deserve a real store. Keep your Instagram — just add a Goozone store. Free to start, delivery included. 👇\n→ Start FREE: https://goozone.com/sell",
    slides: [c4s0, c4s1, c4s2, c4s3, c4s4],
  },
  {
    id: 5,
    title: "From hobby to income — in 20 minutes.",
    caption:
      "I started selling online in Trinidad and got my first order the same week. Your side hustle deserves a real store. Free to start. Upgrade when you're ready. 🔥\n→ Start FREE: https://goozone.com/sell",
    slides: [c5s0, c5s1, c5s2, c5s3, c5s4],
  },
  {
    id: 6,
    title: "Your first 3 products: Free. Your delivery: Included.",
    caption:
      "TTD 500/month for an online store WITH delivery? Here's why it's a no-brainer. Start free. Upgrade only when you're ready. 🇹🇹\n→ Start FREE: https://goozone.com/sell",
    slides: [c6s0, c6s1, c6s2, c6s3],
  },
  {
    id: 7,
    title: "Afraid of technology? You upload photos. That's it.",
    caption:
      '"I put my products on Goozone — took me maybe 20 minutes." No tech skills needed. No delivery stress. Just sales. 🇹🇹\n→ Start FREE: https://goozone.com/sell',
    slides: [c7s0, c7s1, c7s2, c7s3, c7s4],
  },
  {
    id: 8,
    title: "Set up in 20 minutes. Upgrade only when you're ready.",
    caption:
      "Set up in 20 minutes. That's one lunch break. Goozone handles the rest. Free to start, upgrade when you're ready. 💼\n→ Start FREE: https://goozone.com/sell",
    slides: [c8s0, c8s1, c8s2, c8s3, c8s4],
  },
  {
    id: 9,
    title: "TTD 500/month vs doing delivery yourself — the math is simple.",
    caption:
      "TTD 500/month vs what you're already spending on delivery fuel. The math is simple. Goozone gives you a store, delivery fleet, and payments — all included. 🧮\n→ Start FREE: https://goozone.com/sell",
    slides: [c9s0, c9s1, c9s2, c9s3, c9s4],
  },
  {
    id: 10,
    title: "You already have customers. You already have products. What's missing?",
    caption:
      "You have the products. You have the customers. You just need the delivery. Goozone handles everything after the sale. Start free today. 👉\n→ Start FREE: https://goozone.com/sell",
    slides: [c10s0, c10s1, c10s2, c10s3, c10s4],
  },
];

export const blogs: BlogItem[] = [
  {
    id: 1,
    title: "The Hidden Cost of Selling from Instagram DMs in Trinidad (2026)",
    preview:
      "If you sell through Instagram DMs in Trinidad, you already know the pain. The message threads you lose track of, the customers who ghost after asking for delivery, the hours you spend driving across town to drop off orders. What you might not realise is just how much this costs you — in money, time, and missed sales.",
    banner: blog1Banner,
    story: blog1Story,
    docUrl: "./blog-posts.html",
  },
  {
    id: 2,
    title: "How to Start Selling Online in Trinidad with a Full-Time Job (2026 Guide)",
    preview:
      "You have a 9-to-5. You have a side hustle. What you don't have is time. If you've been putting off selling online because it feels like too much work — building a website, figuring out delivery, managing payments — this guide is for you.",
    banner: blog2Banner,
    story: blog2Story,
    docUrl: "./blog-posts.html",
  },
  {
    id: 3,
    title: "Sell Online in Trinidad for Free: Complete Goozone Starter Plan Guide (2026)",
    preview:
      "You've heard you can sell online in Trinidad for free. But how does it actually work? What's included? What's the catch? The Goozone Starter plan is genuinely free — TTD 0 per month. No hidden fees, no commitment, no credit card required.",
    banner: blog3Banner,
    story: blog3Story,
    docUrl: "./blog-posts.html",
  },
  {
    id: 4,
    title: "Goozone vs Facebook Marketplace: Which is Better for T&T Sellers in 2026?",
    preview:
      "Facebook Marketplace is free — we get it. Free is hard to beat when you're just starting out. But free comes with hidden costs. No delivery service. No payment processing. No real storefront. No support. If you're serious about selling online in Trinidad, here's how Goozone compares.",
    banner: blog4Banner,
    story: blog4Story,
    docUrl: "./blog-posts.html",
  },
];

export const newsletters: NewsletterItem[] = [
  {
    id: 1,
    title: "Your real online store is waiting — free 🇹🇹",
    preview: "Stop selling from DMs. Start selling on Goozone. No tech skills, no commitment, free to start.",
    banner: nl1Banner,
    story: email1Story,
    docUrl: "#",
    body: `Hi [First Name],

You have the products. You have the customers. But between Instagram DMs, cash-on-delivery headaches, and driving across town to drop off orders — you're running a delivery service, not a business.

Most T&T sellers don't realise they're losing sales every day — not because their products aren't good, but because they don't have a way to deliver.

Goozone is Trinidad & Tobago's first marketplace with its own delivery fleet. Set up your free store in minutes. List up to 3 products. When an order comes in, our driver picks it up from you and drops it at your customer's door. You don't leave your house.

The Starter plan costs TTD 0. No monthly fee. No commitment. If nobody buys, you lose nothing. But sellers are already getting first-week orders.

Your free store is ready. Take 20 minutes to set it up today.

→ Create Your Free Store: https://goozone.com/sell

See you on the platform,
The Goozone Team`,
    ctaUrl: "https://goozone.com/sell",
    ctaText: "Create Your Free Store",
  },
  {
    id: 2,
    title: "Your shop. Your products. Our delivery.",
    preview: "Keep your physical store. Add an online channel. We handle the delivery — every order, door to door.",
    banner: nl2Banner,
    story: email2Story,
    docUrl: "#",
    body: `Hi [First Name],

You've built your business the old-fashioned way — a physical shop, loyal customers, products you stand behind. But the market is changing. Younger competitors are moving online. Customers are asking: "Do you deliver?"

Goozone is Trinidad & Tobago's marketplace with its own delivery fleet. You keep your shop. You keep your brand. We handle the online store and the delivery.

Delivery included — we handle pickup and drop-off. TTD 500/month and you get TTD 150 in free boost credit. That's TTD 1,800/year in free advertising.

Plus you start free. The Starter plan costs TTD 0 — list 3 products, test the market, upgrade only when you're ready.

Your products. Your brand. Our delivery fleet. The math is simple.

→ Start Your Free Store: https://goozone.com/sell

See you on the platform,
The Goozone Team`,
    ctaUrl: "https://goozone.com/sell",
    ctaText: "Start Your Free Store",
  },
  {
    id: 3,
    title: "Your free store is waiting. No catch.",
    preview: "The Goozone Starter Plan is TTD 0. 3 products, free delivery fleet, no commitment. Start today.",
    banner: nl3Banner,
    story: email3Story,
    docUrl: "#",
    body: `Hi [First Name],

Still thinking about selling online? Your competition isn't.

The Goozone Starter Plan is completely free. TTD 0/month. List up to 3 products with photos and prices. When an order comes in, our delivery driver picks it up from your door and delivers it to your customer. You get paid. You don't leave your house.

No monthly fee. No commitment. No tech skills needed. Cancel anytime.

Your first month is free. Your first 3 products cost nothing to list. Your first delivery is on us. What are you waiting for?

→ Start Your Free Store: https://goozone.com/sell

See you on the platform,
The Goozone Team`,
    ctaUrl: "https://goozone.com/sell",
    ctaText: "Start Your Free Store",
  },
  {
    id: 4,
    title: "You started free. Ready to grow?",
    preview: "Upgrade to Basic and get TTD 150 in free boost credit every month. Here's how it works.",
    banner: nl4Banner,
    story: email4Story,
    docUrl: "#",
    body: `Hi [First Name],

You started on the free Starter plan. You've listed your products. Maybe you've even made your first sale. Now what?

When you're ready, the Basic plan (TTD 500/month) gives you:
- 30 products (up from 3)
- 8% commission (down from 15%)
- TTD 150 in free boost credit every month
- That's TTD 1,800/year in free advertising

"The Basic plan, TTD 500 a month. But honestly the boost credits alone brought me way more than that in new customers."

No pressure. You stay on Starter as long as you want. But when you're ready to grow, Goozone grows with you.

→ Upgrade to Basic: https://goozone.com/plans

Keep selling,
The Goozone Team`,
    ctaUrl: "https://goozone.com/plans",
    ctaText: "Upgrade to Basic",
  },
];

export const meta = {
  client: "Goozone",
  period: "July 2026 — Monthly Drop",
  preparedBy: "Content Preview",
};
