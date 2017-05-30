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

## Calculators Search

Please search for calculators begging with 'a' :-)

{% example html %}
<div id="the-basics" class="calculators">
  <input class="typeahead form-control" type="text" placeholder="Search for calculators">
</div>
{% endexample %}

## Calculators Tabs

{% example html %}

<div class="calculators">
  <div class="card d-inline-block">
    <div class="card-block p-0">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">A - Z</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">By Specialty</a>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endexample %}

## Browse Calculators by Specialty

{% example html %}

<div id="accordion" class="calculators" role="tablist" aria-multiselectable="true">
  <div class="card">
    <div class="card-header" role="tab" id="headingOne">
      <h5 class="mb-0">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
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
      <h5 class="mb-0">
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
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
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

## Browse Calculators by A to Z

Title and description of calculator

{% example html %}
<div class="calculators">
  <div class="card">
    <div class="card-block">
    <h2>A</h2>
      <p><a href="#">A-a O₂ Gradient</a>
      Assesses for degree of shunting and V/Q mismatch.</p>
      <p><a href="#">ABC Score for Massive Transfusion</a>
      Predicts need for massive transfusion in trauma patients</p>
      <p><a href="#">ABC/2 Formula for Intracerebral Hemorrhage Volume</a>
      Predicts volume of intracranial hemorrhage from CT measurements.</p>
      <p><a href="#">ABCD² Score for TIA</a>
      Estimates the risk of stroke after a after a suspected transient ischemic attack (TIA).</p>
      <p><a href="#">ACC/AHA Heart Failure Staging</a>
      Describes stages of heart failure and provides recommendations for therapy by stage.</p>
      <p><a href="#">ACR-EULAR Gout Classification Criteria</a>
      Provides formal diagnostic criteria for gout.</p>
      <p><a href="#">ADAPT Protocol for Cardiac Event Risk</a>
      Assesses chest pain patients at 2-hours for risk of cardiac event.</p>
      <p><a href="#">AIMS65 Score for Upper GI Bleeding Mortality</a>
      Determines risk of in-hospital mortality from upper GI bleeding.</p>
      <p><a href="#">APACHE II Score</a>
      Estimates ICU mortality.</p>
    <h2>C</h2>
      <p><a href="#">A-a O₂ Gradient</a>
      Assesses for degree of shunting and V/Q mismatch.</p>
      <p><a href="#">ABC Score for Massive Transfusion</a>
      Predicts need for massive transfusion in trauma patients</p>
      <p><a href="#">ABC/2 Formula for Intracerebral Hemorrhage Volume</a>
      Predicts volume of intracranial hemorrhage from CT measurements.</p>
      <p><a href="#">ABCD² Score for TIA</a>
      Estimates the risk of stroke after a after a suspected transient ischemic attack (TIA).</p>
      <p><a href="#">ACC/AHA Heart Failure Staging</a>
      Describes stages of heart failure and provides recommendations for therapy by stage.</p>
      <p><a href="#">ACR-EULAR Gout Classification Criteria</a>
      Provides formal diagnostic criteria for gout.</p>
      <p><a href="#">ADAPT Protocol for Cardiac Event Risk</a>
      Assesses chest pain patients at 2-hours for risk of cardiac event.</p>
      <p><a href="#">AIMS65 Score for Upper GI Bleeding Mortality</a>
      Determines risk of in-hospital mortality from upper GI bleeding.</p>
      <p><a href="#">APACHE II Score</a>
      Estimates ICU mortality.</p>
    </div>
  </div>
</div>
{% endexample %}