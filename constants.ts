import { BlogPost, GalleryItem, TeamMember } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Akash Kundu",
    role: "Admin - Director of Frames, Cuts & Story",
    bio: "I’m Akash, the creative force of RayofRoads. Every frame designed, every cut refined, every story written — all crafted to feel cinematic..",
    imageUrl: "https://github.com/tech-akash010/Assets/blob/main/admin1.jpeg?raw=true",
    socials: { 
      instagram: "https://www.instagram.com/0x.akash?igsh=MWNrM2V5bzVmd3BwMw==", 
      linkedin: "https://www.linkedin.com/in/akashkundu010?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // Add actual LinkedIn URL here
    }
  },
  {
    name: "Rahul Kheto",
    role: "Admin - Executer of roads & frames",
    bio: "I’m Rahul, admin and photographer of RayofRoads — shaping the roadmap and capturing every story in its raw, cinematic form..",
    imageUrl: "https://github.com/tech-akash010/Assets/blob/main/Admin2.jpeg?raw=true",
    socials: { 
      instagram: "https://www.instagram.com/rahullkheto?igsh=MTdveHV2N3NuOXB0OA==", 
      facebook: "https://www.facebook.com/share/1ZuK5fU5kY/" 
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Kanchenjunga: The Sleeping Giant of the Himalayas",
    excerpt: "A journey through the quiet peaks where the air is thin and the stories are deep.",
    content: "<p>Kanchenjunga—standing tall at 8,586 meters—is the third-highest mountain in the world and one of the most mesmerizing sights in the Eastern Himalayas. Revered as the “Five Treasures of Snow,” the peak is a symbol of purity, power, and spiritual calm for the people of Sikkim and Nepal.What makes Kanchenjunga truly enchanting is not just its height, but its mystique. Wrapped in swirling clouds, glowing gold during sunrise, and turning soft pink during sunset, the mountain feels almost alive—a guardian watching over lush valleys, deep forests, and ancient monasteries.From viewpoints like Tashi Viewpoint, Pelling, Zuluk, and Tsomgo, travelers witness a sight that feels almost unreal: an enormous white massif rising above everything, silent yet commanding</p>",
    category: "Travel",
    author: "Akash Kundu",
    date: "Oct 19, 2025",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/Kangchenjunga%2C_India.jpg"
  },
  {
    id: "2",
    title: "Nathula Pass: Where Roads Touch the Clouds",
    excerpt: "Perched high on the ancient Silk Route, Nathula Pass is a place where mountains meet the sky.",
    content: "<p>Nathula Pass, sitting at 14,140 ft on the historic Silk Route, is one of Sikkim’s most dramatic and unforgettable destinations. The journey itself feels surreal—winding roads carved into steep mountains, crisp cold winds brushing your face, and clouds drifting so close you can almost touch them.As you reach the top, the pass opens into a vast stretch of snow-covered terrain, offering a rare glimpse of the Indo-China border. Soldiers standing guard, prayer flags fluttering in the icy air, and the raw silence of the mountains create an atmosphere that’s both powerful and peaceful.A visit to Nathula isn’t just a road trip—it’s a reminder of nature’s grandeur and the timeless stories carried by these ancient trade routes. Here, above the world, the mountains whisper history, courage, and a beauty that lingers long after the journey ends..</p>",
    category: "Travel",
    author: "Akash Kundu",
    date: "Nov 05, 2025",
    imageUrl: "https://nomadicweekends.com/blog/wp-content/uploads/2019/03/Nathula-Pass.jpg"
  },
  {
    id: "4",
    title: "Namchi: The Serene Heart of South Sikkim",
    excerpt: "Nestled in the calm hills of South Sikkim, Namchi blends spirituality and scenic beauty with effortless grace.",
    content: "<p>Namchi, meaning “Sky High,” is a peaceful hill town that beautifully blends spirituality, culture, and scenic charm. Surrounded by rolling mountains and lush forests, the town offers a slow, calming rhythm that feels refreshing from the moment you arrive.The towering Samdruptse Statue, overlooking the entire valley, radiates tranquility, while the famous Char Dham complex draws visitors with its grand architecture and sacred energy. Cafes, monasteries, and viewpoints scattered around Namchi add to its relaxed, soulful vibe.Whether you come for the stunning panoramas, the spiritual landmarks, or simply the quiet charm of the hills, Namchi leaves you with a sense of warmth and peace—like a gentle pause in the middle of the Himalayas..</p>",
    category: "Travel",
    author: "Akash Kundu",
    date: "Nov 15, 2025",
    imageUrl: "https://github.com/tech-akash010/Assets/blob/main/img5.jpeg?raw=true"
  }
];

// Added more entries to reach the requested count roughly, preserving existing style
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "1", src: "https://github.com/tech-akash010/Assets/blob/main/img10.jpeg?raw=true", caption: "Nathu la Pass", location: "SIKKIM" },
  { id: "2", src: "https://github.com/tech-akash010/Assets/blob/main/img2.jpeg?raw=true", caption: "NAMCHI", location: "SIKKIM" },
  { id: "3", src: "https://github.com/tech-akash010/Assets/blob/main/img7.jpeg?raw=true", caption: "kanchanjunga waterfall", location: "SIKKIM" },
  { id: "4", src: "https://github.com/tech-akash010/Assets/blob/main/img8.jpeg?raw=true", caption: "KANCHANJUNGA", location: "PELLING, SIKKIM" },
  { id: "5", src: "https://github.com/tech-akash010/Assets/blob/main/img6.jpeg?raw=true", caption: "SIDKEONG TULKU BIRD PARK", location: "USAGYALSHING, SIKKIM" },
  { id: "6", src: "https://github.com/tech-akash010/Assets/blob/main/img1.jpeg?raw=true", caption: "RAVANGLA", location: "SIKKIM" },
  { id: "7", src: "https://github.com/tech-akash010/Assets/blob/main/img9.jpeg?raw=true", caption: "PELLING", location: "SIKKIM" }
];