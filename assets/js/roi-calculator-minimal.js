/**
 * Minimal ROI Calculator for AI Coding Agents
 * Clean, focused implementation following style guide principles
 */

// Development phases configuration
const developmentPhases = {
  requirements: {
    label: 'Requirements & Specs',
    defaultHours: 3,
    automationBenchmark: 0.15,
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>'
  },
  architecture: {
    label: 'Architecture & Design',
    defaultHours: 4,
    automationBenchmark: 0.20,
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>'
  },
  coding: {
    label: 'Coding & Implementation',
    defaultHours: 15,
    automationBenchmark: 0.35,
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>'
  },
  testing: {
    label: 'Testing (unit, integration, e2e)',
    defaultHours: 8,
    automationBenchmark: 0.25,
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>'
  },
  reviews: {
    label: 'Code Reviews',
    defaultHours: 5,
    automationBenchmark: 0.30,
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>'
  },
  documentation: {
    label: 'Documentation',
    defaultHours: 3,
    automationBenchmark: 0.40,
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>'
  },
  devops: {
    label: 'DevOps & Deployment',
    defaultHours: 2,
    automationBenchmark: 0.20,
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2m8 0V9a2 2 0 012-2h2a2 2 0 012 2v3m0 0a2 2 0 01-2 2H9a2 2 0 01-2-2m8 0V9a2 2 0 012-2h2a2 2 0 012 2v3"/>'
  }
};

// Team size is now a direct number input, no mapping needed

// Engineer cost is now a direct number input, no mapping needed

// Global state
let formData = {
  teamSize: 35,
  engineerCost: 80000,
  email: '',
  requirements: 3, architecture: 4, coding: 15, testing: 8,
  reviews: 5, documentation: 3, devops: 2
};

// Debounce timer
let debounceTimer = null;

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 */
function debounce(func, delay) {
  return function(...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
}


/**
 * Encode form data to URL parameters
 */
function encodeToURL() {
  const params = new URLSearchParams();

  // Add all form data to URL parameters
  Object.keys(formData).forEach(key => {
    if (formData[key] !== '' && formData[key] !== undefined) {
      params.set(key, formData[key]);
    }
  });

  return `${window.location.pathname}?${params.toString()}`;
}

/**
 * Decode URL parameters to form data
 */
function decodeFromURL() {
  const params = new URLSearchParams(window.location.search);
  let hasParams = false;

  // Load form data from URL parameters
  Object.keys(formData).forEach(key => {
    if (params.has(key)) {
      hasParams = true;
      const value = params.get(key);

      // Parse numeric values
      if (['teamSize', 'engineerCost', 'requirements', 'architecture', 'coding', 'testing', 'reviews', 'documentation', 'devops'].includes(key)) {
        formData[key] = parseInt(value) || formData[key];
      } else {
        formData[key] = value;
      }
    }
  });

  return hasParams;
}

/**
 * Update URL without page reload
 */
function updateURL() {
  const url = encodeToURL();
  window.history.replaceState({}, '', url);
}

/**
 * Update form fields from loaded data
 */
function updateFormFieldsFromData() {
  // Update team size
  const teamSizeInput = document.getElementById('teamSize');
  if (teamSizeInput) {
    teamSizeInput.value = formData.teamSize;
  }

  // Update engineer cost (with formatting)
  const engineerCostInput = document.getElementById('engineerCost');
  if (engineerCostInput) {
    engineerCostInput.value = formData.engineerCost.toLocaleString('de-DE');
  }

  // Update email
  const emailInput = document.getElementById('email');
  if (emailInput) {
    emailInput.value = formData.email;
  }

  // Update sliders
  Object.keys(developmentPhases).forEach(phaseKey => {
    const slider = document.getElementById(phaseKey);
    if (slider) {
      slider.value = formData[phaseKey];

      // Update slider visual progress
      const percent = (formData[phaseKey] / 20) * 100;
      slider.style.background = `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${percent}%, #E5E7EB ${percent}%, #E5E7EB 100%)`;

      // Update hours display
      const hoursElement = document.querySelector(`[data-phase="${phaseKey}"].phase-hours`);
      if (hoursElement) {
        hoursElement.textContent = `${formData[phaseKey]}h`;
      }
    }
  });
}

/**
 * Initialize the calculator on page load
 */
document.addEventListener('DOMContentLoaded', function() {
  // Load data from URL if present
  const hasUrlParams = decodeFromURL();

  initializeSliders();
  setupEventListeners();

  // If we loaded from URL, update the form fields
  if (hasUrlParams) {
    updateFormFieldsFromData();

    // If email is present, show results immediately
    if (formData.email) {
      const results = calculateSavings();
      displayResults(results);
      showResults();
    }
  }

  updateTotalHours();
  updateConfigurationSummary();

  // Initialize slider styles
  document.querySelectorAll('.phase-slider').forEach(slider => {
    const value = parseInt(slider.value);
    const percent = (value / 20) * 100;
    slider.style.background = `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${percent}%, #E5E7EB ${percent}%, #E5E7EB 100%)`;
  });
});

/**
 * Create minimal slider components
 */
function initializeSliders() {
  const container = document.getElementById('phaseSliders');

  Object.entries(developmentPhases).forEach(([phaseKey, phase]) => {
    const sliderHTML = `
      <div class="py-4">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${phase.icon}
              </svg>
            </div>
            <label class="text-sm font-semibold text-gray-900">${phase.label}</label>
          </div>
          <span class="text-lg font-bold text-primary phase-hours" data-phase="${phaseKey}">
            ${phase.defaultHours}h
          </span>
        </div>
        <input
          type="range"
          id="${phaseKey}"
          min="0"
          max="20"
          value="${phase.defaultHours}"
          aria-label="Hours per week for ${phase.label}"
          aria-valuemin="0"
          aria-valuemax="20"
          aria-valuenow="${phase.defaultHours}"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer phase-slider hover:bg-gray-300 transition-colors"
          data-phase="${phaseKey}"
          style="background: linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(phase.defaultHours/20)*100}%, #E5E7EB ${(phase.defaultHours/20)*100}%, #E5E7EB 100%);"
        />
        <div class="flex justify-between text-xs text-gray-500 mt-3">
          <span>0h</span>
          <span>20h</span>
        </div>
      </div>
    `;
    container.innerHTML += sliderHTML;
  });
}

/**
 * Set up event listeners
 */
function setupEventListeners() {
  // Team size number input with validation
  document.getElementById('teamSize').addEventListener('input', function(e) {
    let value = parseInt(e.target.value);
    // Validate range and provide fallback
    if (isNaN(value) || value < 1) {
      value = 1;
      e.target.value = 1;
    } else if (value > 500) {
      value = 500;
      e.target.value = 500;
    }
    formData.teamSize = value;
    updateConfigurationSummary();
    updateTotalHours();
    updateURL();
  });

  // Engineer cost number input with validation
  document.getElementById('engineerCost').addEventListener('input', function(e) {
    // Remove any non-digit characters for processing
    const cleanValue = e.target.value.replace(/\D/g, '');
    const numericValue = parseInt(cleanValue);

    // Format with German-style thousand separators (dots)
    if (!isNaN(numericValue) && cleanValue.length > 0) {
      const formatted = numericValue.toLocaleString('de-DE');
      e.target.value = formatted;
      formData.engineerCost = numericValue;
    } else if (cleanValue.length === 0) {
      e.target.value = '';
    }
    updateConfigurationSummary();
    updateTotalHours();
    updateURL();
  });

  // Handle focus to show clean numeric value for easier editing
  document.getElementById('engineerCost').addEventListener('focus', function(e) {
    // Show clean number when focused for easier editing
    if (formData.engineerCost) {
      e.target.value = formData.engineerCost.toString();
    }
  });

  // Validate and correct engineer cost only when user finishes editing (blur)
  document.getElementById('engineerCost').addEventListener('blur', function(e) {
    const cleanValue = e.target.value.replace(/\D/g, '');
    let value = parseInt(cleanValue);

    // Validate range and provide fallback
    if (isNaN(value) || value < 40000) {
      value = Math.max(40000, value || 80000);
    } else if (value > 300000) {
      value = 300000;
    }

    // Set formatted value and update data
    e.target.value = value.toLocaleString('de-DE');
    formData.engineerCost = value;
    updateConfigurationSummary();
    updateTotalHours();
    updateURL();
  });

  // Email
  document.getElementById('email').addEventListener('input', function(e) {
    formData.email = e.target.value;
    validateEmail();
    updateURL();
  });

  // Create debounced functions for expensive operations
  const debouncedUpdateURL = debounce(updateURL, 300);
  const debouncedUpdateTotalHours = debounce(updateTotalHours, 150);

  // Sliders
  document.querySelectorAll('.phase-slider').forEach(slider => {
    slider.addEventListener('input', function(e) {
      const phase = e.target.dataset.phase;
      const value = parseInt(e.target.value);
      formData[phase] = value;

      const hoursElement = document.querySelector(`[data-phase="${phase}"].phase-hours`);
      if (hoursElement) hoursElement.textContent = `${value}h`;

      // Update slider progress and accessibility immediately for visual feedback
      const slider = e.target;
      const percent = (value / 20) * 100;
      slider.style.background = `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${percent}%, #E5E7EB ${percent}%, #E5E7EB 100%)`;
      slider.setAttribute('aria-valuenow', value);

      // Debounce expensive operations
      debouncedUpdateTotalHours();
      debouncedUpdateURL();
    });
  });

  // Calculate button
  document.getElementById('calculateBtn').addEventListener('click', handleCalculate);
}


/**
 * Update total hours display and validation
 */
function updateTotalHours() {
  const total = Object.keys(developmentPhases).reduce((sum, phase) => {
    return sum + formData[phase];
  }, 0);

  const avgHoursElement = document.getElementById('avgHoursPerEngineer');
  const totalSpendingElement = document.getElementById('totalAnnualSpending');
  const warningElement = document.getElementById('hoursWarning');
  const calculateBtn = document.getElementById('calculateBtn');

  // Update average hours per engineer display
  if (avgHoursElement) {
    avgHoursElement.textContent = `${total}h/week`;

    // Change color based on hours limit
    if (total > 40) {
      avgHoursElement.classList.add('text-red-600');
      avgHoursElement.classList.remove('text-gray-900');
    } else {
      avgHoursElement.classList.remove('text-red-600');
      avgHoursElement.classList.add('text-gray-900');
    }
  }

  // Calculate and display total annual spending
  if (totalSpendingElement) {
    const totalAnnualSpending = formData.teamSize * formData.engineerCost;
    const formattedSpending = totalAnnualSpending.toLocaleString('de-DE');
    totalSpendingElement.textContent = `€${formattedSpending}`;
  }

  // Validate 40 hour limit and show/hide warning (with error handling)
  if (total > 40) {
    if (warningElement) warningElement.style.opacity = '1';
    if (calculateBtn) calculateBtn.disabled = true;
  } else {
    if (warningElement) warningElement.style.opacity = '0';
    if (calculateBtn) calculateBtn.disabled = false;
  }

  // Update configuration summary (function still called for backward compatibility)
  updateConfigurationSummary();
}

/**
 * Update configuration summary metrics
 */
function updateConfigurationSummary() {
  // Configuration summary section has been removed from UI
  // Function kept for backward compatibility but no longer updates displays
}

/**
 * Email validation with smooth transitions
 */
function validateEmail() {
  const email = formData.email;
  const emailError = document.getElementById('emailError');

  if (!email) {
    emailError.style.opacity = '0';
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid email address';
    emailError.style.opacity = '1';
    return false;
  }

  const personalProviders = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
  const domain = email.split('@')[1]?.toLowerCase();

  if (personalProviders.includes(domain)) {
    emailError.textContent = 'Please use your work email address';
    emailError.style.opacity = '1';
    return false;
  }

  emailError.style.opacity = '0';
  return true;
}

/**
 * Handle calculate button click
 */
function handleCalculate() {
  const formError = document.getElementById('formError');
  formError.style.opacity = '0';

  if (!validateEmail() || !formData.email) {
    formError.textContent = 'Please enter a valid work email to view results';
    formError.style.opacity = '1';
    return;
  }

  const results = calculateSavings();
  displayResults(results);
  showResults();
}

/**
 * Core calculation engine
 */
function calculateSavings() {
  const teamSize = formData.teamSize;
  const annualCost = formData.engineerCost;
  const hourlyRate = annualCost / (52 * 40);

  const phaseSavings = Object.keys(developmentPhases).map(phaseKey => {
    const phase = developmentPhases[phaseKey];
    const weeklyHours = formData[phaseKey] * teamSize;
    const savedHours = weeklyHours * phase.automationBenchmark;
    const annualSavedHours = savedHours * 52;
    const annualSavings = Math.round(annualSavedHours * hourlyRate);

    return {
      phase: phaseKey,
      label: phase.label,
      weeklyHours: Math.round(weeklyHours),
      savedHours: Math.round(savedHours),
      annualSavings,
      benchmark: phase.automationBenchmark * 100
    };
  });

  const totalAnnualSavings = phaseSavings.reduce((sum, p) => sum + p.annualSavings, 0);
  const totalSavedHours = phaseSavings.reduce((sum, p) => sum + p.savedHours, 0) * 52;
  const aiInvestment = teamSize * 3000;
  const roi = Math.round(((totalAnnualSavings - aiInvestment) / aiInvestment) * 100);
  const fteEquivalent = (totalSavedHours / (52 * 40)).toFixed(1);
  const paybackMonths = (aiInvestment / (totalAnnualSavings / 12)).toFixed(1);

  return {
    totalAnnualSavings, roi, fteEquivalent, paybackMonths,
    phaseSavings: phaseSavings.sort((a, b) => b.annualSavings - a.annualSavings)
  };
}

/**
 * Display results
 */
function displayResults(results) {
  document.getElementById('totalSavings').textContent = `€${results.totalAnnualSavings.toLocaleString()}`;
  document.getElementById('roiPercentage').textContent = `${results.roi}%`;
  document.getElementById('fteEquivalent').textContent = `${results.fteEquivalent} FTEs`;
  document.getElementById('paybackPeriod').textContent = `${results.paybackMonths} months`;

  const container = document.getElementById('phaseSavings');
  container.innerHTML = '';

  results.phaseSavings.forEach(phase => {
    const percentage = ((phase.annualSavings / results.totalAnnualSavings) * 100).toFixed(1);
    const phaseData = developmentPhases[phase.phase];
    const phaseHTML = `
      <div class="py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center flex-1">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                ${phaseData.icon}
              </svg>
            </div>
            <div class="flex-1">
              <div class="text-sm font-semibold text-gray-900">${phase.label}</div>
              <div class="text-sm text-gray-600">
                ${phase.savedHours}h/week saved • ${phase.benchmark}% automation
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="font-bold text-lg text-primary">€${phase.annualSavings.toLocaleString()}</div>
            <div class="text-sm text-gray-600">${percentage}% of savings</div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += phaseHTML;
  });
}

/**
 * Navigation functions
 */
function showResults() {
  document.querySelector('#hero-section').style.display = 'none';
  document.querySelector('#calculator-form').style.display = 'none';
  document.querySelector('#results-section').classList.remove('hidden');
  document.querySelector('#results-section').scrollIntoView({ behavior: 'smooth' });
}

function showForm() {
  document.querySelector('#hero-section').style.display = 'block';
  document.querySelector('#calculator-form').style.display = 'block';
  document.querySelector('#results-section').classList.add('hidden');
  document.querySelector('#calculator-form').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Copy shareable URL to clipboard with improved error handling
 */
function copyShareableUrl() {
  const shareableUrl = encodeToURL();
  const fullUrl = `${window.location.origin}${shareableUrl}`;

  // Function to handle successful copy
  const handleSuccess = () => {
    showShareFeedback('✓ Link copied to clipboard!');
  };

  // Function to handle failed copy with fallback
  const handleFailure = () => {
    // Try to show URL in a prompt for manual copying
    try {
      const userCopied = window.prompt(
        'Unable to auto-copy. Please copy the URL manually:',
        fullUrl
      );
      // If user didn't cancel, assume they copied
      if (userCopied !== null) {
        showShareFeedback('✓ Link ready to share!');
      }
    } catch (promptErr) {
      // Final fallback - just show the URL in the feedback
      showShareFeedback('Copy failed. URL: ' + fullUrl);
      console.error('Clipboard API not available:', promptErr);
    }
  };

  // Try modern clipboard API first
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(fullUrl)
      .then(handleSuccess)
      .catch((err) => {
        console.warn('Clipboard API failed, trying fallback:', err);
        fallbackCopyTextToClipboard(fullUrl, handleSuccess, handleFailure);
      });
  } else {
    // Use fallback for older browsers or non-HTTPS
    fallbackCopyTextToClipboard(fullUrl, handleSuccess, handleFailure);
  }
}

/**
 * Fallback method for copying text to clipboard
 */
function fallbackCopyTextToClipboard(text, onSuccess, onFailure) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  textArea.setAttribute('aria-hidden', 'true');
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const result = document.execCommand('copy');
    textArea.remove();
    if (result) {
      onSuccess();
    } else {
      onFailure();
    }
  } catch (err) {
    textArea.remove();
    onFailure();
  }
}

/**
 * Show feedback message for share action
 */
function showShareFeedback(message) {
  const btn = document.getElementById('shareUrlBtn');
  if (!btn) return;

  const originalText = btn.innerHTML;

  // Show success message
  btn.innerHTML = `
    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    ${message.includes('✓') ? 'Copied!' : 'Copy failed'}
  `;

  btn.classList.remove('bg-gray-100', 'hover:bg-gray-200', 'text-gray-700');
  btn.classList.add(message.includes('✓') ? 'bg-green-100' : 'bg-red-100');
  btn.classList.add(message.includes('✓') ? 'text-green-700' : 'text-red-700');

  // Reset after 2 seconds
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.classList.remove('bg-green-100', 'text-green-700', 'bg-red-100', 'text-red-700');
    btn.classList.add('bg-gray-100', 'hover:bg-gray-200', 'text-gray-700');
  }, 2000);
}

function downloadReport() {
  alert('PDF report generation will be implemented in the next phase. For now, please schedule a demo to receive a detailed analysis.');
}

/**
 * Toggle collapsible sections
 */
function toggleSection(sectionId) {
  const content = document.getElementById(sectionId + "-content");
  const icon = document.getElementById(sectionId + "-icon");
  
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    icon.classList.add("rotate-180");
  } else {
    content.classList.add("hidden");
    icon.classList.remove("rotate-180");
  }
}
