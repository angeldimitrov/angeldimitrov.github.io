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

const teamSizeMap = {
  '1-5': 3, '6-20': 13, '21-50': 35, '51-100': 75, '100+': 150
};

const costMap = {
  '€80k': 80000, '€100k': 100000, '€130k': 130000, '€160k': 160000, '€200k': 200000
};

// Global state
let formData = {
  teamSize: '21-50',
  engineerCost: '€130k',
  email: '',
  requirements: 3, architecture: 4, coding: 15, testing: 8,
  reviews: 5, documentation: 3, devops: 2
};

/**
 * Initialize the calculator on page load
 */
document.addEventListener('DOMContentLoaded', function() {
  initializeSliders();
  setupEventListeners();
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
  // Dropdowns
  document.getElementById('teamSize').addEventListener('change', function(e) {
    formData.teamSize = e.target.value;
    updateConfigurationSummary();
  });

  document.getElementById('engineerCost').addEventListener('change', function(e) {
    formData.engineerCost = e.target.value;
    updateConfigurationSummary();
  });

  // Email
  document.getElementById('email').addEventListener('input', function(e) {
    formData.email = e.target.value;
    validateEmail();
  });

  // Sliders
  document.querySelectorAll('.phase-slider').forEach(slider => {
    slider.addEventListener('input', function(e) {
      const phase = e.target.dataset.phase;
      const value = parseInt(e.target.value);
      formData[phase] = value;

      const hoursElement = document.querySelector(`[data-phase="${phase}"].phase-hours`);
      hoursElement.textContent = `${value}h`;

      // Update slider progress
      const slider = e.target;
      const percent = (value / 20) * 100;
      slider.style.background = `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${percent}%, #E5E7EB ${percent}%, #E5E7EB 100%)`;
      updateTotalHours();
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

  const totalElement = document.getElementById('totalHours');
  const warningElement = document.getElementById('hoursWarning');
  const calculateBtn = document.getElementById('calculateBtn');

  totalElement.textContent = `${total}h/week`;

  if (total > 40) {
    totalElement.classList.add('text-red-600');
    totalElement.classList.remove('text-primary');
    warningElement.style.opacity = '1';
    calculateBtn.disabled = true;
  } else {
    totalElement.classList.remove('text-red-600');
    totalElement.classList.add('text-primary');
    warningElement.style.opacity = '0';
    calculateBtn.disabled = false;
  }

  // Update weekly capacity display
  updateConfigurationSummary();
}

/**
 * Update configuration summary metrics
 */
function updateConfigurationSummary() {
  const teamSize = teamSizeMap[formData.teamSize];
  const total = Object.keys(developmentPhases).reduce((sum, phase) => {
    return sum + formData[phase];
  }, 0);
  const weeklyCapacity = total * teamSize;

  // Update configuration summary displays
  document.getElementById('configTeamSize').textContent = formData.teamSize;
  document.getElementById('configEngineerCost').textContent = formData.engineerCost;
  document.getElementById('weeklyCapacity').textContent = `${weeklyCapacity.toLocaleString()}h`;
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
  const teamSize = teamSizeMap[formData.teamSize];
  const annualCost = costMap[formData.engineerCost];
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
  document.querySelector('#calculator-form').style.display = 'none';
  document.querySelector('#results-section').classList.remove('hidden');
  document.querySelector('#results-section').scrollIntoView({ behavior: 'smooth' });
}

function showForm() {
  document.querySelector('#calculator-form').style.display = 'block';
  document.querySelector('#results-section').classList.add('hidden');
  document.querySelector('#calculator-form').scrollIntoView({ behavior: 'smooth' });
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
