---
layout: docs
title: Multimedia
description: How we handle our Multimedia
group: bp components
---

Image and video viewer based on Google imaages pattern. Part of our search resulkts and topic pages content. 

## Multimedia Components

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Search input

{% example html %}
<div class="search-input">
  <input type="text">
  <span class="searchHighlight"></span>
  <span class="bar"></span>
  <label>Search here</label>
  <span class="material-icons">&#xE8B6;</span>
  <span class="material-icons">&#xE14C;</span>
</div>
{% endexample %}

## Tabbed Nav

Card titles are used by adding `.card-title` to a `<h*>` tag. In the same way, links are added and placed next to each other by adding `.card-link` to  a `<a>` tag.

Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag. If the `.card-title` and the `.card-subtitle` items are placed in a `.card-block` item, the card title and subtitle are aligned nicely.

  {% example html %}
  <div class="container serp"> <!--- container -->
    <div class="row">
      <div class="col-md-8">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#all" role="tab">All</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#multimedia" role="tab">Images &amp; Video</a>
          </li>
        </ul>
      </div>
      <ul id="og-grid" class="og-grid">
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/1.jpg" data-title="Monoclonal gammopathy of undetermined significance" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii" data-citation="Eldin C, et al. Clin Microbiol Rev 2016; used with permission">
							<img src="../../../css/images/multimedia/thumbs/1.jpg" alt="img01">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/2.jpg" data-title="COPD" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/2.jpg" alt="img02">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/3.jpg" data-title="Bartonella infection" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/3.jpg" alt="img03">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/1.jpg" data-title="Monoclonal gammopathy of undetermined significance" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/1.jpg" alt="img01">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/2.jpg" data-title="COPD" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/2.jpg" alt="img02">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/3.jpg" data-title="Bartonella infection" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/3.jpg" alt="img03">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/1.jpg" data-title="Monoclonal gammopathy of undetermined significance" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/1.jpg" alt="img01">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/2.jpg" data-title="COPD" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/2.jpg" alt="img02">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/3.jpg" data-title="Bartonella infection" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/3.jpg" alt="img03">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/1.jpg" data-title="Monoclonal gammopathy of undetermined significance" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/1.jpg" alt="img01">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/2.jpg" data-title="COPD" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/2.jpg" alt="img02">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/3.jpg" data-title="Bartonella infection" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/3.jpg" alt="img03">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/1.jpg" data-title="Monoclonal gammopathy of undetermined significance" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/1.jpg" alt="img01">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/2.jpg" data-title="COPD" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/2.jpg" alt="img02">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/3.jpg" data-title="Bartonella infection" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/3.jpg" alt="img03">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/1.jpg" data-title="Monoclonal gammopathy of undetermined significance" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/1.jpg" alt="img01">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/2.jpg" data-title="COPD" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/2.jpg" alt="img02">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/3.jpg" data-title="Bartonella infection" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/3.jpg" alt="img03">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/1.jpg" data-title="Monoclonal gammopathy of undetermined significance" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/1.jpg" alt="img01">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/2.jpg" data-title="COPD" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/2.jpg" alt="img02">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/3.jpg" data-title="Bartonella infection" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/3.jpg" alt="img03">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/1.jpg" data-title="Monoclonal gammopathy of undetermined significance" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/1.jpg" alt="img01">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/2.jpg" data-title="COPD" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/2.jpg" alt="img02">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/3.jpg" data-title="Bartonella infection" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/3.jpg" alt="img03">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/1.jpg" data-title="Monoclonal gammopathy of undetermined significance" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/1.jpg" alt="img01">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/2.jpg" data-title="COPD" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/2.jpg" alt="img02">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/3.jpg" data-title="Bartonella infection" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/3.jpg" alt="img03">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/1.jpg" data-title="Monoclonal gammopathy of undetermined significance" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/1.jpg" alt="img01">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/2.jpg" data-title="COPD" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/2.jpg" alt="img02">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/3.jpg" data-title="Bartonella infection" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/3.jpg" alt="img03">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/1.jpg" data-title="Monoclonal gammopathy of undetermined significance" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/1.jpg" alt="img01">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/2.jpg" data-title="COPD" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/2.jpg" alt="img02">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/3.jpg" data-title="Bartonella infection" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/3.jpg" alt="img03">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/1.jpg" data-title="Monoclonal gammopathy of undetermined significance" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/1.jpg" alt="img01">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/2.jpg" data-title="COPD" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/2.jpg" alt="img02">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/3.jpg" data-title="Bartonella infection" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/3.jpg" alt="img03">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/1.jpg" data-title="Monoclonal gammopathy of undetermined significance" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/1.jpg" alt="img01">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/2.jpg" data-title="COPD" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/2.jpg" alt="img02">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/3.jpg" data-title="Bartonella infection" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/3.jpg" alt="img03">
						</a>
					</li>
					<li>
						<a href="#" data-largesrc="../../../css/images/multimedia/1.jpg" data-title="Monoclonal gammopathy of undetermined significance" data-description="Natural history of Coxiella burnetii and serological/PCR results. Ac+: positive for antibodies to C burnetii, Ac++: strongly positive for antibodies to C burnetii, Ac-: negative for antibodies to C burnetii, PCR+: positive PCR for C burnetii, PCR++: strongly positive PCR for C burnetii, PCR-: negative PCR for C burnetii">
							<img src="../../../css/images/multimedia/thumbs/1.jpg" alt="img01">
						</a>
					</li>
				</ul>
    </div><!--- /row -->
  </div> <!--- /container -->
  {% endexample %}

