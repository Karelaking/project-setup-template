# Contributing to Project Setup Template

Thank you for your interest in contributing! We appreciate all contributions, whether they're bug reports, feature suggestions, or pull requests.

## Code of Conduct

- Be respectful and inclusive
- Welcome all levels of experience
- Provide constructive feedback
- Help others learn and grow

## How to Contribute

### Reporting Bugs

1. **Check existing issues** to avoid duplicates
2. **Create a new issue** with a clear title and description
3. **Include details**:
   - What you were trying to do
   - What happened (error message, screenshots)
   - Your environment (Node version, OS, browser)
   - Steps to reproduce

### Suggesting Features

1. **Describe the feature** and why it would be useful
2. **Provide examples** of how it would work
3. **Discuss alternatives** you've considered
4. **Be open to feedback** from maintainers

### Submitting Code

#### Getting Started

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/your-username/project-setup-template.git

# 3. Create a feature branch
git checkout -b feature/amazing-feature

# 4. Install dependencies
pnpm install

# 5. Make your changes
# ... edit files ...

# 6. Test your changes
pnpm dev
pnpm lint

# 7. Commit your changes
git commit -m "Add amazing feature"

# 8. Push to your fork
git push origin feature/amazing-feature

# 9. Open a Pull Request on GitHub
```

#### Pull Request Guidelines

- **One feature per PR** - Keep changes focused
- **Clear description** - Explain what and why
- **Reference issues** - Link to related issues (#123)
- **Follow code style** - See Code Standards below
- **Update docs** - Update README if needed
- **Test thoroughly** - Verify your changes work

#### Code Standards

- **TypeScript** - Use proper types, no `any`
- **ESLint** - Run `pnpm lint` before committing
- **Comments** - Add comments for complex logic
- **Components** - Keep them small and reusable
- **Naming** - Use clear, descriptive names
- **Formatting** - Follow existing code style

#### Commit Messages

```
Type: Brief description (50 chars max)

Longer explanation if needed (wrap at 72 chars)

- Bullet points for multiple changes
- Fixes #123
```

Types: `feat`, `fix`, `docs`, `refactor`, `perf`, `test`, `chore`

### Development Workflow

```bash
# Start development server
pnpm dev

# Run linter
pnpm lint

# Build for production
pnpm build

# Start production server
pnpm start
```

### Project Structure

```
src/
├── app/               # Next.js app
├── components/        # React components
├── lib/               # Utilities
└── public/            # Static assets
```

## Types of Contributions

### Documentation

- Fix typos or unclear explanations
- Add examples or tutorials
- Improve README sections
- Document complex features

### Code

- Bug fixes with tests
- New features with documentation
- Performance improvements
- Refactoring for clarity
- TypeScript improvements

### Components

- New reusable components
- Component enhancements
- Bug fixes in existing components
- Accessibility improvements

## Questions?

- **Discussions**: Start a GitHub Discussion
- **Issues**: Open an issue for clarification
- **Reach out**: Mention maintainers in PRs

## Recognition

Contributors will be recognized in:
- Pull Request comments
- README contributors section (for significant contributions)
- GitHub graphs

---

**Thanks for making this template better!** 🎉
