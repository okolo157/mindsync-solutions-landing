import { 
  School, 
  BookOpen, 
  Users, 
  FileText, 
  Newspaper, 
  CalendarCheck 
} from "lucide-react";

export interface Product {
    id: string;
    name: string;
    description: string;
    link?: string;
    icon: any;
    tagline: string;
}

export const PRODUCTS: Product[] = [
    {
        id: "sims",
        name: "MindSync SIMS",
        tagline: "School Information Management System",
        description: "A comprehensive platform to automate student data, staff management, attendance, fees, and more.",
        link: "https://sims.mindsync.solutions",
        icon: School
    },
    {
        id: "lms",
        name: "MindSync LMS",
        tagline: "Powered by TutorCafes",
        description: "A world-class Learning Management System designed for seamless digital coursework and interactive learning.",
        link: "https://lms.tutorcafes.com",
        icon: BookOpen
    },
    {
        id: "tutorsmart",
        name: "TutorSmart",
        tagline: "The Future of Tutoring",
        description: "An advanced tutoring platform connecting learners with expert educators globally.",
        link: "https://tutorsmart.com.au",
        icon: Users
    },
    {
        id: "thedoc",
        name: "The Document Transformer",
        tagline: "Static Docs to Dynamic Courses",
        description: "Transform your PDFs and documents into interactive learning courses instantly.",
        link: "https://TheDoc.store",
        icon: FileText
    },
    {
        id: "magazine",
        name: "MindSync Magazine",
        tagline: "Insights into Education Tech",
        description: "Your core source for the latest trends, research, and stories in the educational technology space.",
        icon: Newspaper
    },
    {
        id: "booking",
        name: "Casual Teacher Booking",
        tagline: "Instant Staffing Solutions",
        description: "A streamlined app for schools to find and book casual relief teachers in real-time.",
        link: "https://booking.mindsync.solutions",
        icon: CalendarCheck
    }
];
