---
layout: docs
title: Multimedia
description: How we handle our Multimedia
group: bp components
---
Inline imagews and videos; Image and video viewer based on Google images pattern. Part of our search resulkts and topic pages content. 

## Multimedia Components

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Inline images

{% example html %}
<div class="inline">
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	<figure class="figure">
		<img src="../../../css/images/diff_diag_img.jpg" alt="Please put something descriptive in here">
		<figcaption class="figure-caption">COPD chest x-ray (AP view): hyperinflated lung, flattened diaphragm, increased intercostal spaces
		<span class="imgCredit">From the collection of Manoochehr Abadian Sharifabad, MD</span></figcaption>
	</figure>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
	</p>
</div>
{% endexample %}

{% example html %}
<div class="container inline"> <!--- container -->
	<div class="row">
		<div class="col-md-12">
			<div class="card">
				<div class="card-block">
					<div class="vidWrapper">
						<img src="http://via.placeholder.com/165x93">
						<span class="material-icons">&#xE039;</span>
						<p class="card-text">COPD (Emphysema) Explained Clearly</p>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-block">
					<div class="vidWrapper">
						<img src="http://via.placeholder.com/165x93">
						<span class="material-icons">&#xE039;</span>
						<p class="card-text">UCLA Double Lung Transplant</p>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-block">
					<div class="vidWrapper">
						<img src="http://via.placeholder.com/165x93">
						<span class="material-icons">&#xE039;</span>
						<p class="card-text">Lung Transplant Surgery, How Can A Patient Prepare? Lung Transplant Surgery, How Can A Patient Prepare?
						Lung Transplant Surgery, How Can A Patient Prepare? Lung Transplant Surgery</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{% endexample %}

## Tabbed Nav

Card titles are used by adding `.card-title` to a `<h*>` tag. In the same way, links are added and placed next to each other by adding `.card-link` to  a `<a>` tag.

Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag. If the `.card-title` and the `.card-subtitle` items are placed in a `.card-block` item, the card title and subtitle are aligned nicely.

  {% example html %}
  <div class="container multimedia"> <!--- container -->
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
	</ul>
    </div><!--- /row -->
  </div> <!--- /container -->
  {% endexample %}