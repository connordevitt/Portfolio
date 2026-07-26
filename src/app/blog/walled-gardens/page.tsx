import PostShell from "../../../components/blog/PostShell";
import { getPost, type Block } from "../../../content/posts";

const post = getPost("walled-gardens");

const blocks: Block[] = [
  {
    type: "intro",
    text: "One of those questions stopped me in my tracks recently: why do developers have to build the same app twice?",
  },
  {
    type: "paragraph",
    text: "Let me explain what I mean.",
  },
  {
    type: "heading",
    text: "The Double Build Problem",
  },
  {
    type: "paragraph",
    text: "If you want your app on both the Apple App Store and the Google Play Store (and let’s be honest, you do) you’re looking at building two entirely separate versions of the same product.",
  },
  {
    type: "paragraph",
    text: "Apple’s ecosystem runs on Swift. Google’s runs on Kotlin. Two different languages, two different codebases, two different teams. The app looks identical to the person using it, but behind the scenes it has been rebuilt from the ground up. Twice.",
  },
  {
    type: "paragraph",
    text: "Coming from a web background, this felt bizarre to me. On the web, you write your HTML, CSS, and JavaScript once. It runs on Chrome, Firefox, Safari, and Edge, on a Mac, a PC, or a phone. The open standard of the web means you build it once and it just works.",
  },
  {
    type: "paragraph",
    text: "So why is mobile so different?",
  },
  {
    type: "heading",
    text: "Walled Gardens and Who Benefits",
  },
  {
    type: "paragraph",
    text: "The answer, when you dig into it, isn’t really technical. It’s financial.",
  },
  {
    type: "paragraph",
    text: "Apple and Google built their mobile platforms independently, with different architectures and different philosophies. That’s fair enough, competition drives innovation. But here’s the thing: they have very little incentive to change the status quo, because the status quo makes them an enormous amount of money.",
  },
  {
    type: "paragraph",
    text: "Apple’s App Store facilitates hundreds of billions in transactions every year. They take between 15 to 30% of every purchase made through it. If developers could easily build one app that bypassed the need for native development, the tight grip Apple and Google hold over their ecosystems would loosen significantly. Developers might stop caring which platform their users are on. And that would cost both companies dearly.",
  },
  {
    type: "paragraph",
    text: "There’s even a technology called Progressive Web Apps (PWAs), essentially websites that can be installed on your phone and behave like native apps, no app store required. Google has embraced them reasonably well. Apple? They’ve quietly and consistently limited PWA capabilities on iOS for years. Draw your own conclusions.",
  },
  {
    type: "heading",
    text: "The Frameworks Trying to Fix It",
  },
  {
    type: "paragraph",
    text: "To be fair, the developer community hasn’t just accepted this sitting down. Frameworks like Flutter (by Google) and React Native (by Meta) exist precisely to solve this problem: write your app once, deploy it to both platforms.",
  },
  {
    type: "paragraph",
    text: "Flutter uses a language called Dart. React Native lets you use JavaScript and TypeScript, languages millions of web developers already know. Together, they account for over 80% of the cross-platform development market, and their popularity keeps growing.",
  },
  {
    type: "paragraph",
    text: "But even these solutions are workarounds, not fixes. You’re still operating inside Apple and Google’s rules. You still need their approval. You still pay their cut. The walls are just slightly easier to navigate.",
  },
  {
    type: "heading",
    text: "The Web Was Built Differently, On Purpose",
  },
  {
    type: "paragraph",
    text: "Here’s what really puts this in perspective for me: the inventor of the World Wide Web, Tim Berners-Lee, gave it away for free. He could have patented it, owned it, monetised it, and become one of the wealthiest people in history. Instead he made it an open standard so that everyone, every developer, every user, every country, could benefit equally.",
  },
  {
    type: "paragraph",
    text: "That spirit is still alive today in the open source community. Linux powers most of the internet. Python, React, Flutter, and React Native are all free and open source, built by developers who wanted to solve real problems and share the solutions. These tools have genuinely changed the world, not because they made someone rich, but because they were built to be useful.",
  },
  {
    type: "quote",
    text: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    attribution: "Linus Torvalds, creator of Linux",
  },
  {
    type: "paragraph",
    text: "That’s the culture that built the modern web. Not quarterly earnings targets. Not shareholder reports. Just people who loved building things and wanted to share them.",
  },
  {
    type: "callout",
    text: "Tech should be built for the people, not the shareholders.",
  },
  {
    type: "heading",
    text: "A Better Way Forward",
  },
  {
    type: "paragraph",
    text: "I don’t think Apple and Google are going anywhere. But I do think the tide is slowly turning.",
  },
  {
    type: "paragraph",
    text: "The open source community keeps building better tools. Developers keep pushing for open standards. Regulators in the EU are already forcing Apple to allow alternative app stores. The conversation around platform monopolies is louder than it’s ever been.",
  },
  {
    type: "paragraph",
    text: "And at the end of the day, the best technology in history has always come from people who wanted to make something great, not from boardrooms optimizing for revenue. The developers who built the tools we rely on every day largely still believe that. It’s just a matter of time before the platforms catch up.",
  },
  {
    type: "paragraph",
    text: "In the meantime, I’ll keep learning, keep building, and keep asking the questions that don’t have comfortable answers.",
  },
];

export default function WalledGardensPost() {
  return <PostShell post={post} blocks={blocks} />;
}
