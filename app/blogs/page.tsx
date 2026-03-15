'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogsPage() {
  const blogs = [
    {
      title: 'Building Scalable Web Applications with Next.js',
      excerpt: 'Learn how to build high-performance, scalable web applications using Next.js and modern best practices.',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
      category: 'Web Development',
      date: 'March 10, 2024',
      readTime: '8 min read',
      author: 'Jawanexis Team',
    },
    {
      title: 'The Future of Mobile Development: React Native vs Flutter',
      excerpt: 'A comprehensive comparison of React Native and Flutter for cross-platform mobile development.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
      category: 'Mobile Development',
      date: 'March 5, 2024',
      readTime: '10 min read',
      author: 'Jawanexis Team',
    },
    {
      title: 'Microservices Architecture: Best Practices',
      excerpt: 'Explore best practices for designing and implementing microservices architecture in enterprise applications.',
      image: 'https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg',
      category: 'Architecture',
      date: 'February 28, 2024',
      readTime: '12 min read',
      author: 'Jawanexis Team',
    },
    {
      title: 'API-Led Connectivity with MuleSoft',
      excerpt: 'Understanding API-led connectivity patterns and how MuleSoft helps build reusable integration solutions.',
      image: 'https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg',
      category: 'Integration',
      date: 'February 20, 2024',
      readTime: '15 min read',
      author: 'Jawanexis Team',
    },
    {
      title: 'DevOps Best Practices for Modern Applications',
      excerpt: 'Essential DevOps practices to streamline development and deployment workflows.',
      image: 'https://images.pexels.com/photos/11035364/pexels-photo-11035364.jpeg',
      category: 'DevOps',
      date: 'February 15, 2024',
      readTime: '9 min read',
      author: 'Jawanexis Team',
    },
    {
      title: 'UI/UX Design Trends in 2024',
      excerpt: 'Discover the latest design trends shaping user experiences in web and mobile applications.',
      image: 'https://images.pexels.com/photos/11035545/pexels-photo-11035545.jpeg',
      category: 'Design',
      date: 'February 10, 2024',
      readTime: '7 min read',
      author: 'Jawanexis Team',
    },
  ];

  return (
    <div className="bg-[#000000] min-h-screen">
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#0B0B0B] to-[#000000]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-[40px] md:text-[64px] font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-[#B3B3B3] text-xl leading-relaxed">
              Insights, tutorials, and updates from our engineering team
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-[#161616] border border-[#222222] rounded-2xl overflow-hidden hover:border-white transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-white text-black text-xs font-medium rounded-full">
                      {blog.category}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#E5E5E5] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-[#B3B3B3] mb-4 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-[#6B6B6B] text-sm mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={14} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blogs/${blog.title.toLowerCase().replace(/ /g, '-')}`}
                    className="inline-flex items-center text-white font-medium group-hover:gap-2 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
