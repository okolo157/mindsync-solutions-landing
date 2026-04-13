export interface Product {
    id: string;
    name: string;
    description: string;
    link?: string;
    tagline: string;
}

export const PRODUCTS: Product[] = [
    {
        id: "sims",
        name: "MindSync SIMS",
        tagline: "School Information Management System",
        description: "A comprehensive platform to automate student data, staff management, attendance, fees, and more.",
        link: "https://sims.mindsync.solutions"
    },
    {
        id: "lms",
        name: "MindSync LMS",
        tagline: "High-Performance Learning Management System",
        description: "A world-class Learning Management System designed for seamless digital coursework and interactive learning.",
        link: "https://lms.mindsync.solutions"
    },
    {
        id: "tutorsmart",
        name: "TutorSmart",
        tagline: "The Future of Tutoring",
        description: "An advanced tutoring platform connecting learners with expert educators globally.",
        link: "https://tutorsmart.mindsync.solutions"
    },
    {
        id: "coursify",
        name: "Coursify",
        tagline: "Convert Static Docs to LMS ready courses",
        description: "Transform your PDFs and documents into interactive learning courses instantly.",
        link: "https://coursify.mindsync.solutions"
    },
    {
        id: "magazine",
        name: "MindSync Magazine",
        tagline: "School Newsletter & Events Platform",
        description: "A specialized platform within our SIMS providing parents with an integrated view of the latest events, newsletters, and school-wide communications."
    },
    {
        id: "booking",
        name: "Relief Teacher Booking",
        tagline: "Instant Staffing Solutions",
        description: "A streamlined app for schools to find and book casual relief/substitute teachers in real-time.",
        link: "https://jobs.mindsync.solutions"
    }
];
