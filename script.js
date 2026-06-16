// PRD Generator JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Set today's date as default
    const dateInput = document.getElementById('createdDate');
    if (dateInput) {
        dateInput.valueAsDate = new Date();
    }

    // Get all form elements
    const form = document.getElementById('prdForm');
    const previewBtn = document.getElementById('previewBtn');
    const exportBtn = document.getElementById('exportBtn');
    const clearBtn = document.getElementById('clearBtn');
    const modal = document.getElementById('previewModal');
    const closeModal = document.getElementById('closeModal');
    const closePreview = document.getElementById('closePreview');
    const exportFromPreview = document.getElementById('exportFromPreview');
    const previewContent = document.getElementById('previewContent');

    // Form field IDs
    const formFields = {
        projectName: 'projectName',
        projectOwner: 'projectOwner',
        createdDate: 'createdDate',
        version: 'version',
        executiveSummary: 'executiveSummary',
        problemStatement: 'problemStatement',
        targetUsers: 'targetUsers',
        businessGoals: 'businessGoals',
        userGoals: 'userGoals',
        successMetrics: 'successMetrics',
        userStories: 'userStories',
        mustHaveFeatures: 'mustHaveFeatures',
        shouldHaveFeatures: 'shouldHaveFeatures',
        niceToHaveFeatures: 'niceToHaveFeatures',
        technicalRequirements: 'technicalRequirements',
        dependencies: 'dependencies',
        timeline: 'timeline',
        risks: 'risks',
        assumptions: 'assumptions',
        outOfScope: 'outOfScope',
        stakeholders: 'stakeholders'
    };

    // Get form data
    function getFormData() {
        const data = {};
        for (const [key, id] of Object.entries(formFields)) {
            const element = document.getElementById(id);
            data[key] = element ? element.value.trim() : '';
        }
        return data;
    }

    // Generate markdown content
    function generateMarkdown(data) {
        let markdown = `# ${data.projectName || 'Product Requirements Document'}\n\n`;
        
        // Metadata
        markdown += `**Product Owner:** ${data.projectOwner || 'N/A'}  \n`;
        markdown += `**Date:** ${data.createdDate || new Date().toISOString().split('T')[0]}  \n`;
        markdown += `**Version:** ${data.version || '1.0'}  \n\n`;
        
        markdown += `---\n\n`;

        // Executive Summary
        if (data.executiveSummary) {
            markdown += `## Executive Summary\n\n${data.executiveSummary}\n\n`;
        }

        // Problem Statement
        markdown += `## Problem Statement\n\n`;
        if (data.problemStatement) {
            markdown += `${data.problemStatement}\n\n`;
        }
        if (data.targetUsers) {
            markdown += `### Target Users\n\n${data.targetUsers}\n\n`;
        }

        // Goals & Objectives
        markdown += `## Goals & Objectives\n\n`;
        if (data.businessGoals) {
            markdown += `### Business Goals\n\n${data.businessGoals}\n\n`;
        }
        if (data.userGoals) {
            markdown += `### User Goals\n\n${data.userGoals}\n\n`;
        }
        if (data.successMetrics) {
            markdown += `### Success Metrics (KPIs)\n\n${data.successMetrics}\n\n`;
        }

        // User Stories
        if (data.userStories) {
            markdown += `## User Stories\n\n`;
            const stories = data.userStories.split('\n').filter(s => s.trim());
            stories.forEach(story => {
                markdown += `- ${story.trim()}\n`;
            });
            markdown += `\n`;
        }

        // Features & Requirements
        markdown += `## Features & Requirements\n\n`;
        if (data.mustHaveFeatures) {
            markdown += `### Must-Have Features (P0)\n\n${data.mustHaveFeatures}\n\n`;
        }
        if (data.shouldHaveFeatures) {
            markdown += `### Should-Have Features (P1)\n\n${data.shouldHaveFeatures}\n\n`;
        }
        if (data.niceToHaveFeatures) {
            markdown += `### Nice-to-Have Features (P2)\n\n${data.niceToHaveFeatures}\n\n`;
        }

        // Technical Considerations
        if (data.technicalRequirements || data.dependencies) {
            markdown += `## Technical Considerations\n\n`;
            if (data.technicalRequirements) {
                markdown += `### Technical Requirements\n\n${data.technicalRequirements}\n\n`;
            }
            if (data.dependencies) {
                markdown += `### Dependencies\n\n${data.dependencies}\n\n`;
            }
        }

        // Timeline & Milestones
        if (data.timeline) {
            markdown += `## Timeline & Milestones\n\n${data.timeline}\n\n`;
        }

        // Risks & Assumptions
        if (data.risks || data.assumptions) {
            markdown += `## Risks & Assumptions\n\n`;
            if (data.risks) {
                markdown += `### Potential Risks\n\n${data.risks}\n\n`;
            }
            if (data.assumptions) {
                markdown += `### Assumptions\n\n${data.assumptions}\n\n`;
            }
        }

        // Out of Scope
        if (data.outOfScope) {
            markdown += `## Out of Scope\n\n${data.outOfScope}\n\n`;
        }

        // Stakeholders
        if (data.stakeholders) {
            markdown += `## Stakeholders\n\n${data.stakeholders}\n\n`;
        }

        markdown += `---\n\n`;
        markdown += `*Generated with PRD Template Generator*\n`;

        return markdown;
    }

    // Generate HTML preview
    function generateHTMLPreview(data) {
        let html = `<h1>${data.projectName || 'Product Requirements Document'}</h1>`;
        
        // Metadata
        html += `<p><strong>Product Owner:</strong> ${data.projectOwner || 'N/A'}<br>`;
        html += `<strong>Date:</strong> ${data.createdDate || new Date().toISOString().split('T')[0]}<br>`;
        html += `<strong>Version:</strong> ${data.version || '1.0'}</p>`;
        
        html += `<hr>`;

        // Executive Summary
        if (data.executiveSummary) {
            html += `<h3>Executive Summary</h3><p>${data.executiveSummary}</p>`;
        }

        // Problem Statement
        html += `<h3>Problem Statement</h3>`;
        if (data.problemStatement) {
            html += `<p>${data.problemStatement}</p>`;
        }
        if (data.targetUsers) {
            html += `<h4>Target Users</h4><p>${data.targetUsers}</p>`;
        }

        // Goals & Objectives
        html += `<h3>Goals & Objectives</h3>`;
        if (data.businessGoals) {
            html += `<h4>Business Goals</h4><p>${data.businessGoals}</p>`;
        }
        if (data.userGoals) {
            html += `<h4>User Goals</h4><p>${data.userGoals}</p>`;
        }
        if (data.successMetrics) {
            html += `<h4>Success Metrics (KPIs)</h4><p>${data.successMetrics}</p>`;
        }

        // User Stories
        if (data.userStories) {
            html += `<h3>User Stories</h3><ul>`;
            const stories = data.userStories.split('\n').filter(s => s.trim());
            stories.forEach(story => {
                html += `<li>${story.trim()}</li>`;
            });
            html += `</ul>`;
        }

        // Features & Requirements
        html += `<h3>Features & Requirements</h3>`;
        if (data.mustHaveFeatures) {
            html += `<h4>Must-Have Features (P0)</h4><p>${data.mustHaveFeatures}</p>`;
        }
        if (data.shouldHaveFeatures) {
            html += `<h4>Should-Have Features (P1)</h4><p>${data.shouldHaveFeatures}</p>`;
        }
        if (data.niceToHaveFeatures) {
            html += `<h4>Nice-to-Have Features (P2)</h4><p>${data.niceToHaveFeatures}</p>`;
        }

        // Technical Considerations
        if (data.technicalRequirements || data.dependencies) {
            html += `<h3>Technical Considerations</h3>`;
            if (data.technicalRequirements) {
                html += `<h4>Technical Requirements</h4><p>${data.technicalRequirements}</p>`;
            }
            if (data.dependencies) {
                html += `<h4>Dependencies</h4><p>${data.dependencies}</p>`;
            }
        }

        // Timeline & Milestones
        if (data.timeline) {
            html += `<h3>Timeline & Milestones</h3><p>${data.timeline}</p>`;
        }

        // Risks & Assumptions
        if (data.risks || data.assumptions) {
            html += `<h3>Risks & Assumptions</h3>`;
            if (data.risks) {
                html += `<h4>Potential Risks</h4><p>${data.risks}</p>`;
            }
            if (data.assumptions) {
                html += `<h4>Assumptions</h4><p>${data.assumptions}</p>`;
            }
        }

        // Out of Scope
        if (data.outOfScope) {
            html += `<h3>Out of Scope</h3><p>${data.outOfScope}</p>`;
        }

        // Stakeholders
        if (data.stakeholders) {
            html += `<h3>Stakeholders</h3><p>${data.stakeholders}</p>`;
        }

        return html;
    }

    // Download markdown file
    function downloadMarkdown(markdown, filename) {
        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Validate required fields
    function validateForm() {
        const projectName = document.getElementById('projectName').value.trim();
        const executiveSummary = document.getElementById('executiveSummary').value.trim();
        const problemStatement = document.getElementById('problemStatement').value.trim();

        if (!projectName) {
            alert('Please enter a Project Name');
            document.getElementById('projectName').focus();
            return false;
        }
        if (!executiveSummary) {
            alert('Please enter an Executive Summary');
            document.getElementById('executiveSummary').focus();
            return false;
        }
        if (!problemStatement) {
            alert('Please enter a Problem Statement');
            document.getElementById('problemStatement').focus();
            return false;
        }
        return true;
    }

    // Preview button handler
    previewBtn.addEventListener('click', function() {
        if (!validateForm()) return;

        const data = getFormData();
        const htmlContent = generateHTMLPreview(data);
        previewContent.innerHTML = htmlContent;
        modal.classList.add('active');
    });

    // Export button handler
    exportBtn.addEventListener('click', function() {
        if (!validateForm()) return;

        const data = getFormData();
        const markdown = generateMarkdown(data);
        const filename = `PRD_${data.projectName.replace(/\s+/g, '_')}_${data.createdDate || 'draft'}.md`;
        downloadMarkdown(markdown, filename);
        
        // Show success message
        showSuccessMessage('PRD exported successfully!');
    });

    // Export from preview button handler
    exportFromPreview.addEventListener('click', function() {
        const data = getFormData();
        const markdown = generateMarkdown(data);
        const filename = `PRD_${data.projectName.replace(/\s+/g, '_')}_${data.createdDate || 'draft'}.md`;
        downloadMarkdown(markdown, filename);
        modal.classList.remove('active');
        showSuccessMessage('PRD exported successfully!');
    });

    // Clear button handler
    clearBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to clear all fields? This action cannot be undone.')) {
            form.reset();
            dateInput.valueAsDate = new Date();
        }
    });

    // Close modal handlers
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    closePreview.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Show success message
    function showSuccessMessage(message) {
        // Create success message element if it doesn't exist
        let successMsg = document.querySelector('.success-message');
        if (!successMsg) {
            successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            form.insertBefore(successMsg, form.firstChild);
        }
        
        successMsg.textContent = message;
        successMsg.classList.add('show');
        
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 3000);
    }

    // Auto-save to localStorage (optional feature)
    function saveToLocalStorage() {
        const data = getFormData();
        localStorage.setItem('prdDraft', JSON.stringify(data));
    }

    function loadFromLocalStorage() {
        const saved = localStorage.getItem('prdDraft');
        if (saved) {
            const data = JSON.parse(saved);
            for (const [key, value] of Object.entries(data)) {
                const element = document.getElementById(formFields[key]);
                if (element && value) {
                    element.value = value;
                }
            }
        }
    }

    // Auto-save every 30 seconds
    setInterval(saveToLocalStorage, 30000);

    // Load saved draft on page load
    loadFromLocalStorage();

    // Save on form change
    form.addEventListener('change', saveToLocalStorage);
});

// Made with Bob
