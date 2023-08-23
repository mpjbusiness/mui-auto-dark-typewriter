//Uses PrismJS to style code of various languages
//Creates a block of code with UI to 'Copy'
//Custom CSS files define the code styles and the scroll bar styles

import * as React from 'react';
import { useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GitHubIcon from '@mui/icons-material/GitHub';
import Prism from 'prismjs';
import "../prism.css";
import "./codebox.css";

interface codeline {
    line: string;
    language: string;
    githubLink?: string;
  }

const copyText = async(line: string) => {
    await navigator.clipboard.writeText(line)
}

export default function Codebox({line, language, githubLink}:codeline) {
    useEffect(() => {
        Prism.highlightAll();
      }, []);

    return (
    <Box className="codebox" style={{ whiteSpace: 'pre-wrap' }} 
    sx={{ display: 'flex', pl: 1, pr: 1, mt: 1, mb: 2, bgcolor: '#222222', borderRadius: 2 }}
    >
        <Box sx={{ flexGrow: 1, overflow: 'auto' }} >
            <pre>
                <code className={`language-${language}`}>
                    {line}
                </code>
            </pre>
        </Box>
        <Box display="flex" justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
            sx={{ maxHeight: '2.5rem', mt: { xs: 1.5, md: 2 },
            flexDirection: { xs: "column", md: "row"} }}>
            <IconButton color="primary" aria-label="copy" component="label" onClick={() => copyText(line)}>
                <ContentCopyIcon />
            </IconButton>
            {githubLink ?
            <IconButton href={githubLink} target="_blank" color="primary" aria-label={githubLink} >
                <GitHubIcon />
            </IconButton> : ""
            }
        </Box>
    </Box>

    )
}