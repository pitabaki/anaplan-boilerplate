<?php 
/**
 * Template Name: Search
 *
 * This template's sole purpose is to populate the search page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Astra
 */


?>

<?php

	get_header();

?>

  <body id="search" class='CoveoSearchInterface' data-enable-history="true">
  <style type="text/css">.tolb-holder{display:none;}</style>
    <!--<div class="CoveoHelloWorld"></div>-->
    <!--<div class="coveo-tab-section">
      <a class="CoveoTab" data-id="All" data-caption="All Content"></a>
      <a class="CoveoTab" data-id="All" data-caption="Anaplan"></a>
    </div>-->
    <div class='coveo-search-section'>
      <div class="CoveoSettings"></div>
      <div class="CoveoSearchbox" data-enable-omnibox="true"></div>
    </div>
    <div class="CoveoAnalytics" data-search-hub="AnaplanComSH"></div>
    <div class="coveo-main-section">
      <div class="coveo-facet-column">
        <div class="CoveoFacet" data-title="Data Source" id="source" data-field="@commonsource" data-value-caption='{"Website":"Anaplan.com","Help Portal":"Anapedia"}' data-number-of-values='5'></div>
        <div class="CoveoFacet" data-title="Community Types" id="CommunityTypesFacet" data-field="@commontype" data-value-caption='{"Tkb" : "Article"}' data-number-of-values='5'></div>
        <div class="CoveoFacet" data-title="Topics" data-field="@commontopic" data-number-of-values='5' data-allowed-values="Calculation Functions,Modeling,Dashboards and Visualization,Data Integration,Administration and Security,Importing and Exporting Data,Extensions and Add-ins,Application Lifecycle Management,App Hub"></div>
        <div class="CoveoFacet" data-title="Anaplan.com Category" data-number-of-values="5" data-field="@commoncategory" data-available-sorts="AlphaAscending"></div>
        <!--<div class="CoveoFacet" data-title="Year" data-field="@year" data-tab="All"></div>
        <div class="CoveoFacet" data-title="Month" data-field="@month" data-tab="All"></div>-->
      </div>
      <div class="coveo-results-column">
        <div class="CoveoShareQuery"></div>
        <div class="CoveoExportToExcel"></div>
        <div class="CoveoPreferencesPanel">
          <div class="CoveoResultsPreferences"></div>
          <div class="CoveoResultsFiltersPreferences"></div>
        </div>
        <div class="CoveoBreadcrumb"></div>
        <div class="coveo-results-header">
          <div class="coveo-summary-section">
            <span class="CoveoQuerySummary"></span>
            <span class="CoveoQueryDuration"></span>
          </div>
          <div class="coveo-result-layout-section">
            <span class="CoveoResultLayout"></span>
          </div>
          <div class="coveo-sort-section">
            <span class="CoveoSort" data-sort-criteria="relevancy" data-caption="Relevance"></span>
            <span class="CoveoSort" data-sort-criteria="@commondate descending,@commondate ascending" data-caption="Date"></span>
          </div>
        </div>
        <div class="CoveoHiddenQuery"></div>
        <div class="CoveoDidYouMean"></div>
        <div class="CoveoErrorReport"></div>
        <div class="CoveoResultList" data-layout="list" data-wait-animation="fade" data-auto-select-fields-to-include="true"></div>
        <div class="CoveoResultList" data-layout="card" data-wait-animation="fade" data-auto-select-fields-to-include="true"></div>
        <div class="CoveoPager"></div>
        <div class="CoveoLogo"></div>
        <div class="CoveoResultsPerPage"></div>
      </div>
    </div>


<?php

	get_footer();

?>

<script>
    document.addEventListener('DOMContentLoaded', function () {
      if ( Coveo !== undefined && typeof Coveo !== 'undefined') {
        return false;
      }
      var root = document.body;
      var currentWindowLocation = window.location.href;
      var accessTokes = 'xxa78b6ab2-0045-43d3-aad3-f6c224793e51';//Production access token
      if ( currentWindowLocation.indexOf("anaplan.staging") !== -1 ) {
        console.log("Staging environment");
        var accessTokes = 'xx20ec22e0-c68e-4b96-8b54-b8f8fab567aa';//staging access token
      } else {
        console.log("production environment");
      }
      //Coveo.SearchEndpoint.configureSampleEndpointV2();
      Coveo.SearchEndpoint.endpoints['default'] = new Coveo.SearchEndpoint({
        restUri: 'https://platform.cloud.coveo.com/rest/search',
        accessToken: accessTokes 
      });
      Coveo.init(root);
    }); 
</script>
</body>