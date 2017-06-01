---
layout: docs
title: BP Calculators
description: Various calculators. Browsable accoring to specialty.
group: bp components
---

The Bootstrap collapse plugin allows you to toggle content on your pages with a few classes thanks to some helpful JavaScript.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Calculators Tabs

2 x Tabs as titled

{% example html %}
<div class="calculators">
  <div class="card d-inline-block mb-3">
    <div class="card-block p-0">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#atoz" role="tab">A - Z</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#bySpecialty" role="tab">By Specialty</a>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endexample %}

## Calculators Search

Included 'A' only for illustration. Search for a calculator begining with 'A' to filter the search results.

{% example html %}
<div class="calculators">
  <form action="#">
    <div class="form-search search-only"> 
      <input id="myInput" onkeyup="searchCalc()" class="form-control search-query pl-3" placeholder="Search for calculators" type="text">
      <span class="material-icons">&#xE8B6;</span>
    </div>
  </form>
</div>
<div class="calculators">
  <div class="card">
    <div class="card-block">
      <div id="atoz-list">
        <h2>A</h2> 
        <p><a href="/best-practice/ebm-calculator.html?calcName=AAGradient.htm">A-a Gradient</a> 
          Calculates difference between alveolar and arterial oxygen concentration.</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=ABCD2.htm">ABCD2 Score to Predict Stroke Risk after TIA</a>
          Estimates the risk of stroke following transient ischemic attack.</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=AbsEocount.htm">Absolute Eosinophil Count</a>
          Assesses number of eosinophils (e.g., in people with allergic or autoimmune conditions, or parasite infections).</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=AbsLymphocyteCnt.htm">Absolute Lymphocyte Count</a>
          Estimates number of lymphocytes and predicts CD4 count.</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=AbsNeutrophileCnt.htm">Absolute Neutrophil Count</a> 
          Measures number of neutrophils (used to asses neutropenia or neutrophipa).</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=AbsReticCnt.htm">Absolute Reticulocyte Count</a>
          Measures reticulocytes (used to assess anemia).</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=ACR_EULAR.htm">ACR/EULAR Rheumatoid Arthritis Diagnostic Criteria (2010)</a>
          Diagnostic criteria for rheumatoid arthritis.</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=CHF_BNP.htm">Acute Heart Failure Prediction Based on NT-proBNP and Cpnical Features</a>
          Estimates risk of acute heart failure. </p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=AlcoholScreen.htm ">Alcohol Consumption Screening AUDIT Questionnaire</a> 
          Screening tool to identify alcohol use disorders.</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=AmikacinDosing.htm">Amikacin Dosing q24hr (also Kanamycin and Streptomycin)</a>
          Calculates dose based on patient's weight and renal factors.</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=AminoGlycCl.htm">Aminoglycoside Clearance Estimate</a>
          Estimates rate of aminoglycoside clearance.</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=AnionGap.htm">Anion Gap</a>
          Aids in identifying causes of metabopc acidosis.</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=AnionGapDeltaGradient.htm">Anion Gap Delta Delta Gradient Multicalc</a> 
          Aids in identifying acid-base disorders.</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=AnionGapDeltaRatio.htm">Anion Gap Delta Delta Ratio Multicalc</a>
          Aids in identifying acid-base disorders.</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=AnionGapHypoAlb.htm">Anion Gap in Hypoalbumin States</a>
          Calculation of anion gap (to identify acid-base disorders) taking hypoalbuminemia into account. </p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=ApacheScore.htm">APACHE II scoring system</a>
          Estimates ICU mortapty.</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=ApgarScore.htm">Apgar score</a>
          Assesses neonates 1 and 5 minutes after birth.</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=ArterialBloodGas.htm">Arterial Blood Gas Interpretation TreeCalc</a>
          Analysis of arterial blood gas results.</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=AtrialFibCHADSVASc.htm">Atrial Fibrillation CHA(2)DS(2)-VASc Score for Stroke Risk</a>
          Estimates risk of stroke in patients with atrial fibrillation.</p>
        <p><a href="/best-practice/ebm-calculator.html?calcName=AtrialFibCHADS2.htm">Atrial fibrillation CHADS(2) score for stroke risk</a>
          Estimates risk of stroke in patients with atrial fibrillation.</p>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Browse Calculators by Specialty

{% example html %}

<div id="accordion" class="calculators" role="tablist" aria-multiselectable="true">
  <div class="card">
    <div class="card-header" role="tab" id="headingOne">
      <h5>
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          Anesthesia
        </a>
      </h5>
    </div>
    <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne">
      <div class="card-block">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingTwo">
      <h5>
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Anthropometrics
        </a>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="card-block">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingThree">
      <h5>
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
          Cardiology
        </a>
      </h5>
    </div>
    <div id="collapseThree" class="collapse show" role="tabpanel" aria-labelledby="headingThree">
      <div class="card-block ml-5">
         <p class="mt-0"><a href="#">CHA₂DS₂-VASc Score for Atrial Fibrillation Stroke Risk</a>
          Calculates stroke risk for patients with atrial fibrillation, possibly better than the CHADS2 score.</p>
          <p><a href="#">CHADS₂ Score for Atrial Fibrillation Stroke Risk</a>
          Estimates stroke risk in patients with atrial fibrillation.</p>
          <p><a href="#">Cardiac Anesthesia Risk Evaluation Score (CARE)</a>
          Predicts mortality and morbidity after cardiac surgery.</p>
      </div>
    </div>
  </div>
</div>
{% endexample %}
