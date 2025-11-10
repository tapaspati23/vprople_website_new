export const menuData = [
  {
    title: 'Products',
    subMenu: [
      { title: 'Vetted Interviews', desc: 'Remote expert-led technical assessments', link: '/vetted-interviews' },
      { title: 'Interview Bites', desc: 'One-way self-recorded interviews', link: '/interview-bites' }
    ]
  },
  {
    title: 'Solutions',
    subMenu: [
      { title: 'Global Capability Centers', desc: 'Assessments tailored for offshore units managing key functions for MNCs', link: '/global-capability-centers' },
      { title: 'Start Ups', desc: 'Interviews crafted for emerging, innovation-driven disruptors', link: '/start-ups' },
      { title: 'Enterprises', desc: 'Built to assess candidates for large, established commercial enterprises', link: '/enterprises' },
      { title: 'Recruitment Agencies', desc: 'Empowering recruiters and staffing agencies with targeted assessments', link: '/recruitment-agencies' }
    ]
  },
  {
    title: 'Company',
    subMenu: [
      { title: 'About Us', link: '/about' },
      { title: 'Partners', link: '/partners' },
      { title: 'Trust Center', link: '/trust-center' },
      { title: 'Hiring Now', link: '/hiring-now' },
      { title: 'Blogs', link: '/blog' }
    ]
  },
  {
    title: 'How It Works',
    subMenu: [
      { title: 'Employer', link: '/employer' },
      { title: 'Expert Interviewer', link: '/expert-interviewer' },
      { title: 'Affiliate Partner', link: '/affiliate-partners' }
    ]
  },
  {
    title: 'Pricing',
    link: '/pricing'
  },
  {
    title: 'Login',
    subMenu: [
      { title: 'Employer', link: 'https://platform.vprople.com/' },
      { title: 'Experts', link: 'https://expert.vprople.com/' }
    ]
  }
]

export type SubMenuItem = { title: string; desc?: string; link: string }
export type MenuItem = { title: string; link?: string; subMenu?: SubMenuItem[] }

export default menuData
