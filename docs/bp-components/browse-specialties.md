---
layout: docs
title: Browse Specialties
description: Toggle the visibility of content across your project with a few classes and our JavaScript plugins.
group: bp components
---

The Bootstrap collapse plugin allows you to toggle content on your pages with a few classes thanks to some helpful JavaScript.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Specialties Landing Page

Specialties page default layout

{% example html %}
<div class="specialties">
  <div class="card">
    <div class="card-block">
      <div class="row">
        <div class="col-md-4">
          <ul>
            <li><a href="#">Allergy and immunology</a></li>
            <li><a href="#">Cardiothoracic surgery</a></li>
            <li><a href="#">Cardiovascular disorders</a></li>
            <li><a href="#">Critical care medicine</a></li>
            <li><a href="#">Dermatology</a></li>
            <li><a href="#">Ear, nose and throat</a></li>
            <li><a href="#">Emergency medicine</a></li>
            <li><a href="#">Endocrinology and metabolic disorders</a></li>
            <li><a href="#">Gastroenterology and hepatology</a></li>
            <li><a href="#">General surgery</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul>
            <li><a href="#">Genetics</a></li>
            <li><a href="#">Geriatric medicine</a></li>
            <li><a href="#">Haematology</a></li>
            <li><a href="#">Health maintenance</a></li>
            <li><a href="#">Infectious diseases</a></li>
            <li><a href="#">Nephrology</a></li>
            <li><a href="#">Neurology</a></li>
            <li><a href="#">Neurosurgery</a></li>
            <li><a href="#">Nutrition</a></li>
            <li><a href="#">Obstetrics and gynaecology</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul>
            <li><a href="#">Oncology</a></li>
            <li><a href="#">Ophthalmology</a></li>
            <li><a href="#">Orthopaedics</a></li>
            <li><a href="#">Paediatrics and adolescent medicine</a></li>
            <li><a href="#">Psychiatry</a></li>
            <li><a href="#">Respiratory disorders</a></li>
            <li><a href="#">Rheumatology</a></li>
            <li><a href="#">Urology</a></li>
            <li><a href="#">Vascular surgery</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Specialty Page Tabs

2 x individual specialty page tabs (A - Z and Emergencies )

{% example html %}
<div class="specialties">
  <div class="card d-inline-block">
    <div class="card-block p-0">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">A - Z</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Emergencies</a>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endexample %}

## Specialty Page A - Z Header

Individual specialty page A - Z

{% example html %}
<div class="specialties">
  <div class="card">
    <div class="card-block p-0">
      <ul class="nav nav-pills w-100 mb-3">
        <li class="nav-item">
          <a class="nav-link" href="#">A</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">B</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">C</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">D</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">E</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">F</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">G</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">H</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">I</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">J</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">K</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">L</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> ... </a>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endexample %}

## Specialty Page Condition List 

Individual specialty Conditions A - Z List

{% example html %}
<div class="specialties">
  <div class="card">
    <div class="card-block">
    <h2>A</h2>
      <ul class="mt-2">
        <li><a href="#">Allergy and immunology</a></li>
        <li><a href="#">Cardiothoracic surgery</a></li>
        <li><a href="#">Cardiovascular disorders</a></li>
        <li><a href="#">Critical care medicine</a></li>
        <li><a href="#">Dermatology</a></li>
        <li><a href="#">Ear, nose and throat</a></li>
        <li><a href="#">Emergency medicine</a></li>
        <li><a href="#">Endocrinology and metabolic disorders</a></li>
        <li><a href="#">Gastroenterology and hepatology</a></li>
        <li><a href="#">General surgery</a></li>
      </ul>
    <h2>B</h2>
      <ul>
        <li><a href="#">Bradycardia</a></li>
      </ul>
    </div>
  </div>
</div>
{% endexample %}
