---
layout: docs
title: Condition Landing Page
description: Condition Landing page components
group: bp components
---
**Notes**
- UI elements for conditions topic page - excluding nav and treatment tables (located elsewhere - tbc).
- Right Hand Side content to be added soon.
- Please note some of the markup is specific to Components Library (i.e. only one 'container' &amp; 'col-md-8' class required for left hand side) 


## Snippets

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


{% capture callout-include %}{% include callout-coding-standards.md %}{% endcapture %}
{{ callout-include | markdownify }}

## Summary

Summary displays a snippet (266 characters) where appropriate. Please see project.js for javascript 'readmore' code that runs this (may be removed/tbc).

{% example html %}
<div class="container topic">
<h2>Summary</h2>
  <div class="row">
    <div class="col-md-8">
      <div class="card mb-4">
        <div class="card-block">
          <p class="more">Cardinal symptom is usually steady, sudden-onset abdominal pain radiating to the back. Associated with nausea and vomiting. A history of cholelithiasis or alcohol intake is often present. Typical signs include epigastric tenderness, fever, and tachycardia. Cardinal symptom is usually steady, sudden-onset abdominal pain radiating to the back. Associated with nausea and vomiting. A history of cholelithiasis or alcohol intake is often present. Typical signs include epigastric tenderness, fever, and tachycardia. Cardinal symptom is usually steady, sudden-onset abdominal pain radiating to the back. Associated with nausea and vomiting. A history of cholelithiasis or alcohol intake is often present. Typical signs include epigastric tenderness, fever, and tachycardia.  Cardinal symptom is usually steady, sudden-onset abdominal pain radiating to the back. Associated with nausea and vomiting. A history of cholelithiasis or alcohol intake is often present. Typical signs include epigastric tenderness, fever, and tachycardia. Cardinal symptom is usually steady, sudden-onset abdominal pain radiating to the back. </p> 
          <h3>Definition</h3>
          <p class="more">A disorder of the exocrine pancreas, and is associated with acinar cell injury with local and systemic inflammatory responses. [1] The severity of the disease ranges from mild pancreatic oedema with full recuperation to severe systemic inflammatory response with ancreatic peri-pancreatic necrosis. A history of cholelithiasis or alcohol intake is often present. Typical signs include epigastric tenderness, fever, and tachycardia. Cardinal symptom is usually steady, sudden-onset abdominal pain radiating to the back.</p>
        </div>
      </div><!--/ Summary text -->
    </div>
  </div>
</div>
{% endexample %}

## History and exam
More details to follow.
{% example html %}
<div class="container topic">
  <div class="row">
    <div class="col-md-8">
      <h3>History and exam</h3>
          <div class="card-group mb-4">
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">Key diagnostic factors</h4>
                <ul class="mb-1">
                  <li>serum lipase</li>
                  <li>serum amylase</li>
                  <li>AST/ALT</li>
                  <li>FBC and differential</li>
                  <li>C-reactive protein (CRP)</li>
                  <li>haematocrit</li>
                  <li>arterial blood gas</li>
                </ul>
                <p class="pl-3 pt-0"><a href="#">Full details</a></p>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">Other diagnostic factors</h4>
                <ul class="mb-1">
                  <li>serum lipase</li>
                  <li>serum amylase</li>
                  <li>AST/ALT</li>
                  <li>FBC and differential</li>
                  <li>C-reactive protein (CRP)</li>
                  <li>haematocrit</li>
                  <li>arterial blood gas</li>
                </ul>
                <p class="pl-3 pt-0"><a href="#">Full details</a></p>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">Risk factors</h4>
                <ul class="mb-1">
                  <li>serum lipase</li>
                  <li>serum amylase</li>
                  <li>AST/ALT</li>
                  <li>FBC and differential</li>
                  <li>C-reactive protein (CRP)</li>
                  <li>haematocrit</li>
                  <li>arterial blood gas</li>
                </ul>
                <p class="pl-3 pt-0"><a href="#">Full details</a></p>
              </div>
            </div>
          </div>
    </div>
  </div>
</div>
{% endexample %}

## Diagnostic investigations
FYI this could be 3 column also.
More details to follow.
{% example html %}
<div class="container topic">
  <div class="row">
    <div class="col-md-8">
      <h3>Diagnostic investigations</h3>
          <div class="card-group mb-4">
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">1st investigations to order</h4>
                <ul class="mb-1">
                  <li>serum lipase</li>
                  <li>serum amylase</li>
                  <li>AST/ALT</li>
                  <li>FBC and differential</li>
                  <li>C-reactive protein (CRP)</li>
                  <li>haematocrit</li>
                  <li>arterial blood gas</li>
                </ul>
                <p class="pl-3 pt-0"><a href="#">Full details</a></p>
              </div>
            </div>
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">Investigations to consider</h4>
                <ul class="mb-1">
                  <li>serum lipase</li>
                  <li>serum amylase</li>
                  <li>AST/ALT</li>
                  <li>FBC and differential</li>
                  <li>C-reactive protein (CRP)</li>
                  <li>haematocrit</li>
                  <li>arterial blood gas</li>
                </ul>
                <p class="pl-3 pt-0"><a href="#">Full details</a></p>
              </div>
            </div>
          </div>
    </div>
  </div>
</div>
{% endexample %}

## Treatment Tables
Coming soon ...
More details to follow.
{% example html %}

{% endexample %}

## Contributors - Authors & Peer Reviewers
This is identical to the Peer reviewers implementation.
Please see Marcia Greenberg (2nd below) for UI design of accordion content.

{% example html %}
  <div class="container topic">
  <div class="row">
    <div class="col-md-8">
      <h3>Contributors</h3>
          <div class="card card-inverse">
            <div class="card-block">
              <h4>Authors</h4><div id="collapse-init" class="viewAll"><a id="collapse-init">View all <span class="material-icons">&#xE313;</span></a></div>
            </div>
          </div>
            <div id="accordion" role="tablist" aria-multiselectable="true" class="mb-5">
              <div class="card">
                <div class="card-header" role="tab" id="headingOne">
                  <h5><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Arti N. Shah, MS, MD
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
                      Marcia Greenberg, MS, PT
                    </a>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div class="card-block">
                    <img src="http://via.placeholder.com/170x190">
                   <address>Clinical Coordinator<br />
                   UCLA/Orthopaedic Institute for Children Center for Cerebral Palsy<br />
                   David Geffen School of Medicine at UCLA<br />
                   Los Angeles<br />
                   CA</address>
                   <h6 style="font-weight:bold;">Disclosures</h6>
                   <p>MG received travel and accommodation expenses from a non-profit organization, UCP Wheels for Humanity, while teaching in El Salvador and Ukraine through a grant from UCP Wheels for Humanity, and the USAID. MG was paid as a private consultant to undertake teaching in Colombia; UCP Wheels for Humanity paid for her travel and accommodation.</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab" id="headingThree">
                  <h5>
                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      William L. Oppenheim, MD
                    </a>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div class="card-block">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
    </div>
  </div>
</div>
{% endexample %}
