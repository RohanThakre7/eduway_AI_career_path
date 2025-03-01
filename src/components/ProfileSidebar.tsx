import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  User, 
  Award, 
  BookOpen, 
  HelpCircle, 
  LogOut,
  BarChart3
} from 'lucide-react';

interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ isOpen, onClose }) => {
  // Mock user data
  const user = {
    name: "priya bhadekar",
    email: "priyabhadekar@gmail.com",
    progress: 65,
    badges: [
      { name: "Quick Starter", icon: <Award size={18} /> },
      { name: "Survey Completer", icon: <Award size={18} /> }
    ],
    courses: [
      { name: "Web Development Fundamentals", progress: 80 },
      { name: "Data Science Essentials", progress: 45 },
      { name: "UX Design Principles", progress: 20 }
    ]
  };

  const sidebarVariants = {
    closed: {
      x: "-100%",
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
    },
    open: {
      x: "0%",
      boxShadow: "10px 0px 50px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            className="fixed top-0 left-0 h-full w-full sm:w-80 bg-white z-50 overflow-y-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold">Profile</h2>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* User Info */}
            <div className="p-6 border-b">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                  <User size={32} />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">{user.name}</h3>
                  <p className="text-neutral-600 text-sm">{user.email}</p>
                </div>
              </div>
              
              {/* Progress */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Profile Completion</span>
                  <span className="text-sm font-medium">{user.progress}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full" 
                    style={{ width: `${user.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Badges */}
            <div className="p-6 border-b">
              <h3 className="font-bold mb-4 flex items-center">
                <Award className="mr-2 text-primary-600" size={18} />
                Badges
              </h3>
              <div className="flex flex-wrap gap-2">
                {user.badges.map((badge, index) => (
                  <div 
                    key={index}
                    className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm flex items-center"
                  >
                    {badge.icon}
                    <span className="ml-1">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Courses */}
            <div className="p-6 border-b">
              <h3 className="font-bold mb-4 flex items-center">
                <BookOpen className="mr-2 text-primary-600" size={18} />
                Enrolled Courses
              </h3>
              <div className="space-y-4">
                {user.courses.map((course, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{course.name}</span>
                      <span className="text-xs text-neutral-600">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-1.5">
                      <div 
                        className="bg-secondary-500 h-1.5 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Actions */}
            <div className="p-6 space-y-3">
              <button className="w-full flex items-center p-3 rounded-lg hover:bg-neutral-100 transition-colors">
                <BarChart3 className="mr-3 text-primary-600" size={20} />
                <span>View Progress</span>
              </button>
              <button className="w-full flex items-center p-3 rounded-lg hover:bg-neutral-100 transition-colors">
                <HelpCircle className="mr-3 text-primary-600" size={20} />
                <span>Get Help</span>
              </button>
              <button className="w-full flex items-center p-3 rounded-lg hover:bg-neutral-100 transition-colors text-red-600">
                <LogOut className="mr-3" size={20} />
                <span>Log Out</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProfileSidebar;