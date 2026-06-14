# Portfolio Customization Guide

This portfolio is data-driven. Most content changes only require editing files in `src/data/`, then committing and pushing.

## Pages

1. **Home Page** (`/`)
   - Hero section
   - About section
   - Skills grouped by category
   - Featured projects
   - Featured experience timeline
   - Contact section

2. **Projects Page** (`/projects`)
   - Search projects
   - Filter by technology
   - Project cards with links

3. **Project Detail Page** (`/projects/[slug]`)
   - Overview
   - Feature list
   - Architecture
   - Challenges
   - Lessons learned

4. **Skills Page** (`/skills`)
   - Search skills
   - Filter by category
   - Filter by proficiency
   - Skills grouped by category

5. **Experiences Page** (`/experiences`)
   - Search roles, companies, highlights, and tools
   - Filter by technology
   - Timeline entries with highlights and technology chips

6. **Resume Page** (`/resume`)
   - Professional summary
   - Experience timeline
   - Key projects
   - Education
   - Achievements
   - Core competencies

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── skills/
│   │   └── page.tsx
│   ├── experiences/
│   │   └── page.tsx
│   └── resume/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── SectionTitle.tsx
│   ├── ProjectCard.tsx
│   ├── SkillBadge.tsx
│   ├── ExperienceTimeline.tsx
│   ├── ContactCard.tsx
│   ├── SearchBar.tsx
│   └── TechnologyFilter.tsx
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   └── socials.ts
└── lib/
    └── utils.ts
```

## Edit Profile

Edit `src/data/profile.ts`:

```typescript
export const profile = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  bio: "Your bio",
  introduction: "Your introduction",
  interests: "Your interests",
  location: "City, State",
  email: "your@email.com",
  resumeUrl: "/your-resume.pdf",
};
```

## Add Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: "unique-id",
  slug: "project-slug",
  title: "Project Title",
  description: "Full project description",
  shortDescription: "Short project summary",
  technologies: ["Tech1", "Tech2"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://project.com",
  image: "/project-image.png",
  featured: true,
  overview: "Project overview",
  features: ["Feature 1", "Feature 2"],
  architecture: "Architecture details",
  challenges: "Challenges faced",
  lessonsLearned: "Key lessons",
}
```

## Add Experiences

Edit `src/data/experience.ts`. The `/experiences` and `/resume` pages show the full list. The home page shows up to 3 entries where `featured` is `true`.

```typescript
{
  id: "exp-1",
  company: "Company Name",
  position: "Job Title",
  startDate: "2024-01",
  endDate: "2024-06", // use null for current role
  description: "Role description",
  highlights: ["Achievement 1", "Achievement 2"],
  technologies: ["Tech1", "Tech2"],
  featured: true, // show on home page, max 3 featured entries
}
```

## Add Skills

Edit `src/data/skills.ts`. Add new categories to `skillCategories` so they appear in the UI filters and grouped sections.

```typescript
{
  id: "skill-1",
  name: "JavaScript",
  category: "Languages",
  proficiency: "expert", // beginner, intermediate, advanced, expert
}
```

```typescript
export const skillCategories = [
  "Languages",
  "Backend",
  "Frontend",
  "Databases",
];
```

## Update Social Links

Edit `src/data/socials.ts`:

```typescript
{
  id: "social-1",
  name: "GitHub",
  url: "https://github.com/yourprofile",
  icon: "github",
}
```

## Available Scripts

```bash
npm run dev
npm run build
npm start
npm run lint
```

## Notes

- All portfolio content lives in local data files.
- Search and filtering are client-side.
- No database is required.
- Project detail pages are generated from each project `slug`.
- Skills and experiences are intentionally simple to add by editing one object per entry.
