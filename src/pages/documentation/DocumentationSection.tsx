import React from 'react';
import { Box, Typography, Grid, Paper, List, ListItem, ListItemText, Divider, Link } from '@mui/material';

// Interface for defining document section data
interface DocumentSection {
  title: string;
  description: string;
  links: { label: string; url: string }[];
}

const documentationData: DocumentSection[] = [
  {
    title: 'Getting Started',
    description: 'Learn how to navigate through the online exam portal and set up your profile.',
    links: [
      { label: 'How to create an account', url: '/docs/account-setup' },
      { label: 'First steps on the portal', url: '/docs/first-steps' },
    ],
  },
  {
    title: 'Exam Rules & Guidelines',
    description: 'Understand the exam rules and what is expected during your exam.',
    links: [
      { label: 'Rules and Conduct', url: '/docs/exam-rules' },
      { label: 'Cheating and Malpractice', url: '/docs/malpractice' },
    ],
  },
  {
    title: 'Technical Support',
    description: 'Find solutions to common technical issues encountered during exams.',
    links: [
      { label: 'Troubleshooting Login Issues', url: '/docs/login-issues' },
      { label: 'System Requirements', url: '/docs/system-requirements' },
    ],
  },
];

// Documentation Section Component
const DocumentationSection: React.FC = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Documentation
      </Typography>

      {/* Loop through documentation data */}
      {documentationData.map((section, index) => (
        <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
          <Typography variant="h5" gutterBottom>
            {section.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {section.description}
          </Typography>

          {/* List of links */}
          <List>
            {section.links.map((link, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={<Link href={link.url} color="primary">{link.label}</Link>}
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ marginTop: 2 }} />
        </Paper>
      ))}
    </Box>
  );
};

export default DocumentationSection;
