/**
 * LegislatorController
 *
 * @description :: Server-side logic for getting legislators
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var _ = require('lodash');
var request = require('request');
// var govTrack = require('govtrack-node');
// var Q = require('q');

module.exports = {
	getAll: function(req, res) {

		var url = "http://congress.api.sunlightfoundation.com/legislators?per_page=all&apikey=c16a6c623ee54948bac2a010ea6fab70";

		request({
			    url: url,
			    json: true
			}, function (error, response, body) {

			    if (!error && response.statusCode === 200) {

					var congressData = body.results;
					var legislators = [];

					for (var key in congressData) {

						// var bioguide_id = congressData[key].bioguide_id;
						// var birthday = congressData[key].birthday;
						// var crp_id = congressData[key].crp_id;
						// var facebook_id = congressData[key].facebook_id;
						var fax = congressData[key].fax;
						// var fec_ids = congressData[key].fec_ids;
						var first_name = congressData[key].first_name;
						// var gender = congressData[key].gender;
						// var govtrack_id = congressData[key].govtrack_id;
						// var in_office = congressData[key].in_office;
						var last_name = congressData[key].last_name;
						// var leadership_role = congressData[key].leadership_role;
						// var middle_name = congressData[key].middle_name;
						// var office = congressData[key].office;
						var party = congressData[key].party;
						var phone = congressData[key].phone;
						var state = congressData[key].state;
						// var state_name = congressData[key].state_name;
						// var term_end = congressData[key].term_end;
						// var term_start = congressData[key].term_start;
						// var thomas_id = congressData[key].thomas_id;
						var title = congressData[key].title;
						// var twitter_id = congressData[key].twitter_id;
						// var website = congressData[key].website;

						// var username = first_name.replace('.','').replace(' ','.') + '.' + last_name.replace(' ','.');
						var email = first_name.replace('.','').replace(' ','.') + '.' + last_name.replace(' ','.') + '@gmail.com';
						// var socialMedia = {
						// 	twitter: twitter_id,
						// 	facebook: facebook_id
						// };

						var model = {
							first_name: first_name,
							last_name: last_name,
							title: title,
							state: state,
							party: party,
							phone: phone,
							fax: fax,
							email: email,
							title: title

							/*username: username,
							socialMedia: socialMedia,
							leadership_role:leadership_role,
							term_end: term_end,
							term_start: term_start,
							bioguide_id: bioguide_id*/
						};
						// console.log(model);
						legislators.push(model);

				}
	    	}

			res.json(legislators);

		});
	}
}
