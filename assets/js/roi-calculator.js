/**
 * ROI Calculator for AI Coding Agents
 *
 * Calculates potential time and cost savings from implementing AI coding agents
 * in software development workflows. Uses industry benchmarks for automation
 * percentages across different development phases.
 *
 * Business Context:
 * - 7 development phases with specific automation potential (15-40%)
 * - €3,000 per engineer annual AI investment assumption
 * - 52 week, 40 hour work year calculation basis
 * - Corporate email validation for lead qualification
 */

// Development phases configuration with icons and automation benchmarks
const developmentPhases = {
  requirements: {
    label: 'Requirements & Specs',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>`,
    defaultHours: 3,
    automationBenchmark: 0.15 // 15% automation potential
  },
  architecture: {
    label: 'Architecture & Design',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`,
    defaultHours: 4,
    automationBenchmark: 0.20 // 20% automation potential
  },
  coding: {
    label: 'Coding & Implementation',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
    defaultHours: 15,
    automationBenchmark: 0.35 // 35% automation potential (highest)
  },
  testing: {
    label: 'Testing (unit, integration, e2e)',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    defaultHours: 8,
    automationBenchmark: 0.25 // 25% automation potential
  },
  reviews: {
    label: 'Code Reviews',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
    defaultHours: 5,
    automationBenchmark: 0.30 // 30% automation potential
  },
  documentation: {
    label: 'Documentation',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
    defaultHours: 3,
    automationBenchmark: 0.40 // 40% automation potential (second highest)
  },
  devops: {
    label: 'DevOps & Deployment',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
    defaultHours: 2,
    automationBenchmark: 0.20 // 20% automation potential
  }
};

// Team size to numeric mapping for calculations
const teamSizeMap = {
  '1-5': 3,
  '6-20': 13,
  '21-50': 35,
  '51-100': 75,
  '100+': 150
};

// Engineer cost to numeric mapping (annual fully-loaded cost)
const costMap = {
  '€80k': 80000,
  '€100k': 100000,
  '€130k': 130000,
  '€160k': 160000,
  '€200k': 200000
};

// Global state for form data
let formData = {
  teamSize: '21-50',
  engineerCost: '€130k',
  email: '',
  // Development phase hours (initialized with defaults)
  requirements: 3,
  architecture: 4,
  coding: 15,
  testing: 8,
  reviews: 5,
  documentation: 3,
  devops: 2
};

/**
 * Initialize the calculator on page load
 * Sets up form elements, event listeners, and initial state
 */
document.addEventListener('DOMContentLoaded', function() {
  initializePhaseSliders();
  setupEventListeners();
  updateTotalHours();
});

/**
 * Create and populate the development phase slider controls
 * Each phase gets a labeled slider with real-time value display
 */
function initializePhaseSliders() {
  const container = document.getElementById('phaseSliders');

  Object.entries(developmentPhases).forEach(([phaseKey, phase]) => {
    const sliderHTML = `
      <div class="bg-white rounded-xl p-6 shadow-sm">
        <div class="flex items-center justify-center mb-4">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
            ${phase.icon}
          </div>
          <div class="flex-1">
            <h4 class="font-semibold text-neutral-900 mb-1">${phase.label}</h4>
            <div class="text-primary font-bold phase-hours" data-phase="${phaseKey}">${phase.defaultHours}h/week</div>
          </div>
        </div>
        <input
          type="range"
          id="${phaseKey}"
          min="0"
          max="20"
          value="${phase.defaultHours}"
          class="w-full h-3 bg-neutral-200 rounded-lg appearance-none cursor-pointer phase-slider transition-all duration-200"
          data-phase="${phaseKey}"
          style="background: linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(phase.defaultHours/20)*100}%, #E5E5E5 ${(phase.defaultHours/20)*100}%, #E5E5E5 100%)"
        />
        <div class="flex justify-between text-xs text-neutral-500 mt-2">
          <span>0h</span>
          <span>10h</span>
          <span>20h</span>
        </div>
      </div>
    `;
    container.innerHTML += sliderHTML;
  });
}

/**
 * Set up all event listeners for form interactions
 * Handles slider changes, form submissions, and real-time updates
 */
function setupEventListeners() {
  // Team size and cost dropdowns
  document.getElementById('teamSize').addEventListener('change', function(e) {
    formData.teamSize = e.target.value;
  });

  document.getElementById('engineerCost').addEventListener('change', function(e) {
    formData.engineerCost = e.target.value;
  });

  // Email input with validation
  document.getElementById('email').addEventListener('input', function(e) {
    formData.email = e.target.value;
    validateEmail();
  });

  // Phase sliders with real-time updates
  document.querySelectorAll('.phase-slider').forEach(slider => {
    slider.addEventListener('input', function(e) {
      const phase = e.target.dataset.phase;
      const value = parseInt(e.target.value);
      formData[phase] = value;

      // Update display
      document.querySelector(`[data-phase="${phase}"].phase-hours`).textContent = `${value}h/week`;

      // Update slider visual progress
      const percentage = (value / 20) * 100;
      e.target.style.background = `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${percentage}%, #E5E5E5 ${percentage}%, #E5E5E5 100%)`;

      updateTotalHours();
    });
  });

  // Calculate button
  document.getElementById('calculateBtn').addEventListener('click', handleCalculate);
}

/**
 * Update total hours display and validation state
 * Shows warning if total exceeds 40 hours per week
 */
function updateTotalHours() {
  const total = Object.keys(developmentPhases).reduce((sum, phase) => {
    return sum + formData[phase];
  }, 0);

  const totalElement = document.getElementById('totalHours');
  const warningElement = document.getElementById('hoursWarning');
  const calculateBtn = document.getElementById('calculateBtn');

  totalElement.textContent = `${total}h/week`;

  if (total > 40) {
    totalElement.classList.add('text-red-600');
    warningElement.classList.remove('hidden');
    calculateBtn.disabled = true;
  } else {
    totalElement.classList.remove('text-red-600');
    warningElement.classList.add('hidden');
    calculateBtn.disabled = false;
  }
}

/**
 * Validate email address format and domain
 * Requires corporate email (excludes common personal email providers)
 */
function validateEmail() {
  const email = formData.email;
  const emailError = document.getElementById('emailError');

  if (!email) {
    emailError.classList.add('hidden');
    return false;
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid email address';
    emailError.classList.remove('hidden');
    return false;
  }

  // Corporate email validation (exclude common personal providers)
  const personalProviders = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com'];
  const domain = email.split('@')[1]?.toLowerCase();

  if (personalProviders.includes(domain)) {
    emailError.textContent = 'Please use your work email address';
    emailError.classList.remove('hidden');
    return false;
  }

  emailError.classList.add('hidden');
  return true;
}

/**
 * Handle calculate button click
 * Validates form and shows results if valid
 */
function handleCalculate() {
  const formError = document.getElementById('formError');

  // Reset error state
  formError.classList.add('hidden');

  // Validate email
  if (!validateEmail() || !formData.email) {
    formError.textContent = 'Please enter a valid work email to view results';
    formError.classList.remove('hidden');
    return;
  }

  // Calculate and display results
  const results = calculateSavings();
  displayResults(results);
  showResults();
}

/**
 * Core calculation engine - computes ROI based on form inputs
 * Uses industry benchmarks for automation percentages by development phase
 *
 * @returns {Object} Comprehensive results including savings, ROI, and breakdowns
 */
function calculateSavings() {
  const teamSize = teamSizeMap[formData.teamSize];
  const annualCost = costMap[formData.engineerCost];
  const hourlyRate = annualCost / (52 * 40); // 52 weeks × 40 hours

  // Calculate savings by development phase
  const phaseSavings = Object.keys(developmentPhases).map(phaseKey => {
    const phase = developmentPhases[phaseKey];
    const weeklyHours = formData[phaseKey] * teamSize;
    const savedHours = weeklyHours * phase.automationBenchmark;
    const annualSavedHours = savedHours * 52;
    const annualSavings = Math.round(annualSavedHours * hourlyRate);

    return {
      phase: phaseKey,
      label: phase.label,
      icon: phase.icon,
      weeklyHours: Math.round(weeklyHours),
      savedHours: Math.round(savedHours),
      annualSavings,
      benchmark: phase.automationBenchmark * 100
    };
  });

  // Calculate totals and ROI metrics
  const totalAnnualSavings = phaseSavings.reduce((sum, p) => sum + p.annualSavings, 0);
  const totalSavedHours = phaseSavings.reduce((sum, p) => sum + p.savedHours, 0) * 52;

  // AI investment assumption: €3,000 per engineer per year
  const aiInvestment = teamSize * 3000;
  const roi = Math.round(((totalAnnualSavings - aiInvestment) / aiInvestment) * 100);

  // Additional metrics
  const fteEquivalent = (totalSavedHours / (52 * 40)).toFixed(1);
  const paybackMonths = (aiInvestment / (totalAnnualSavings / 12)).toFixed(1);

  return {
    totalAnnualSavings,
    roi,
    fteEquivalent,
    paybackMonths,
    phaseSavings: phaseSavings.sort((a, b) => b.annualSavings - a.annualSavings), // Sort by highest savings
    aiInvestment
  };
}

/**
 * Display calculation results in the results section
 * Updates all result elements with formatted values
 *
 * @param {Object} results - Calculation results from calculateSavings()
 */
function displayResults(results) {
  // Update main metrics
  document.getElementById('totalSavings').textContent = `€${results.totalAnnualSavings.toLocaleString()}`;
  document.getElementById('roiPercentage').textContent = `${results.roi}%`;
  document.getElementById('fteEquivalent').textContent = `${results.fteEquivalent} FTEs`;
  document.getElementById('paybackPeriod').textContent = `${results.paybackMonths} months`;

  // Update phase breakdown
  const phaseSavingsContainer = document.getElementById('phaseSavings');
  phaseSavingsContainer.innerHTML = '';

  results.phaseSavings.forEach(phase => {
    const percentage = ((phase.annualSavings / results.totalAnnualSavings) * 100).toFixed(1);

    const phaseHTML = `
      <div class="flex items-center justify-between p-4 bg-neutral-700/30 rounded-lg border border-neutral-600/30">
        <div class="flex items-center flex-1">
          <div class="text-neutral-400 mr-3">
            ${phase.icon}
          </div>
          <div>
            <div class="font-medium text-white">
              ${phase.label}
            </div>
            <div class="text-sm text-neutral-400">
              ${phase.savedHours}h/week saved (${phase.benchmark}% automation)
            </div>
          </div>
        </div>
        <div class="text-right ml-4">
          <div class="font-bold text-lg text-secondary">
            €${phase.annualSavings.toLocaleString()}
          </div>
          <div class="text-sm text-neutral-400">
            ${percentage}% of total
          </div>
        </div>
      </div>
    `;

    phaseSavingsContainer.innerHTML += phaseHTML;
  });
}

/**
 * Show results section and hide form sections
 * Smooth transition between form and results views
 */
function showResults() {
  // Hide all form sections
  const formSections = document.querySelectorAll('section[id*="calculator-form"], section:has(#phaseSliders), section:has(#calculateBtn)');
  formSections.forEach(section => {
    section.style.display = 'none';
  });

  document.getElementById('results-section').classList.remove('hidden');

  // Smooth scroll to results
  document.getElementById('results-section').scrollIntoView({
    behavior: 'smooth'
  });
}

/**
 * Show form sections and hide results section
 * Allows users to adjust their inputs
 */
function showForm() {
  // Show all form sections
  const formSections = document.querySelectorAll('section[id*="calculator-form"], section:has(#phaseSliders), section:has(#calculateBtn)');
  formSections.forEach(section => {
    section.style.display = 'block';
  });

  document.getElementById('results-section').classList.add('hidden');

  // Smooth scroll to first form section
  const firstFormSection = document.querySelector('section:has(#teamSize)');
  if (firstFormSection) {
    firstFormSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

/**
 * Generate and download a detailed PDF report
 * Future enhancement - currently shows placeholder
 */
function downloadReport() {
  // Placeholder for PDF generation functionality
  alert('PDF report generation will be implemented in the next phase. For now, please schedule a demo to receive a detailed analysis.');
}