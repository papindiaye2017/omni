!function(a){"use strict";var b={cache:{$document:a(document),$window:a(window)},init:function(){this.bindEvents()},bindEvents:function(){var a=this;this.cache.$document.on("ready",function(){a.initApply(),a.initIndeed(),a.avoidSubmission(),a.initContact()})},initApply:function(){var b=a(".application_details, .resume_contact_details"),c=a(".application_button, .resume_contact_button");b.length&&(b.addClass("modal").attr("id","apply-overlay"),c.addClass("popup-trigger").attr("href","#apply-overlay"))},initIndeed:function(){a(".job_listings").on("update_results",function(){a(".indeed_job_listing").addClass("type-job_listing")})},initContact:function(){a(".resume_contact_button").click(function(b){return b.preventDefault(),Jobify.App.popup({items:{src:a(".resume_contact_details")}}),!1})},avoidSubmission:function(){a(".job_filters, .resume_filters").submit(function(a){return!1})}};b.init()}(jQuery),function(a){"use strict";var b={cache:{$document:a(document),$window:a(window)},init:function(){this.bindEvents()},bindEvents:function(){var a=this;this.cache.$document.on("ready",function(){a.initApplyWith()})},initApplyWith:function(){a(".wp-job-manager-application-details").addClass("modal").on("wp-job-manager-application-details-show",function(b){Jobify.App.popup({items:{src:a(b.delegateTarget)}})})}};b.init()}(jQuery);