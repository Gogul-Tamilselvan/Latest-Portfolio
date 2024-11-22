import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact,FaNodeJs,FaJava,FaPython,FaFigma,FaWordpress,FaYoutube } from "react-icons/fa";
import { SiAdobephotoshop,SiAdobepremierepro } from "react-icons/si";
import { DiIllustrator, } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaMeta } from "react-icons/fa6";




const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const skills = [
        { name: 'React', icon: FaReact        },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Java', icon: FaJava },
        { name: 'Python', icon: FaPython },
        { name: 'Postgresql', icon: BiLogoPostgresql },
        { name: 'PhotoShop', icon: SiAdobephotoshop },
        { name: 'Illustrator', icon: DiIllustrator },
        { name: 'Figma', icon: FaFigma },
        { name: 'Wordpress', icon: FaWordpress },
        { name: 'Video Editing', icon: SiAdobepremierepro },
        { name: 'Content Creator', icon: FaYoutube },
        { name: 'Ads', icon: FaMeta  },

    ];

    return (
        <section id="about" className="py-20 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Profile Image Section */}
                    <div className="relative">
                        {/* Profile image with animation */}
                        <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.8 }}
    className="relative z-10 flex justify-center items-center"
>
    <div className="aspect-square max-w-xs md:max-w-sm rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-1">
        <div className="rounded-2xl overflow-hidden">
            <img
                src="download (1).jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                loading="lazy"
            />
        </div>
    </div>
</motion.div>


                        {/* Decorative Background Blurs */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl z-0"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl z-0"
                        />
                    </div>

                    {/* About Text Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                About{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                                    Me
                                </span>
                            </h2>
                            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            I’m a Full-Stack Developer with a year of experience in both code and no-code development. I create seamless, high-performance digital solutions that are both functional and visually striking. Whether through custom code or no-code platforms, my focus is always on delivering intuitive, user-friendly experiences. Explore my work, and let’s bring your ideas to life!                            </p>
                        </motion.div>

                        {/* Skills Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl p-4 hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300"
                                >
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="w-8 h-8 text-purple-500 group-hover:text-pink-500 transition-colors">
                                            <skill.icon className="w-full h-full" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
