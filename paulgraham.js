var list = ['vb.html','ineq.html','re.html','jessica.html','bias.html','talk.html','aord.html','safe.html','name.html','altair.html','ronco.html','work.html','corpdev.html','95.html','ecw.html','know.html','pinch.html','mean.html','before.html','fr.html','herd.html','convince.html','ds.html','invtrend.html','startupideas.html','hw.html','growth.html','swan.html','todo.html','speak.html','property.html','ambitious.html','word.html','schlep.html','vw.html','hubs.html','patentpledge.html','airbnb.html','control.html','tablets.html','founders.html','superangels.html','seesv.html','hiresfund.html','yahoo.html','future.html','addiction.html','top.html','selfindulgence.html','organic.html','apple.html','really.html','discover.html','publishing.html','nthings.html','determination.html','kate.html','segway.html','ramenprofitable.html','makersschedule.html','revolution.html','twitter.html','foundervisa.html','5founders.html','relres.html','angelinvesting.html','convergence.html','maybe.html','hackernews.html','13sentences.html','identity.html','credentials.html','divergence.html','highres.html','artistsship.html','badeconomy.html','fundraising.html','prcmc.html','cities.html','distraction.html','lies.html','good.html','googles.html','heroes.html','disagree.html','boss.html','ycombinator.html','trolls.html','newthings.html','startuphubs.html','webstartups.html','philosophy.html','colleges.html','die.html','head.html','stuff.html','equity.html','unions.html','guidetoinvestors.html','judgement.html','microsoft.html','notnot.html','wisdom.html','foundersatwork.html','goodart.html','startupmistakes.html','mit.html','investors.html','copy.html','island.html','marginal.html','america.html','siliconvalley.html','startuplessons.html','randomness.html','softwarepatents.html','6631327.html','whyyc.html','love.html','procrastination.html','web20.html','startupfunding.html','vcsqueeze.html','ideas.html','sfp.html','inequality.html','ladder.html','opensource.html','hiring.html','submarine.html','bronze.html','mac.html','writing44.html','college.html','venturecapital.html','start.html','hs.html','usa.html','charisma.html','polls.html','laundry.html','bubble.html','essay.html','pypar.html','gh.html','gap.html','wealth.html','gba.html','say.html','ffb.html','hp.html','iflisp.html','hundred.html','nerds.html','better.html','desres.html','spam.html','icad.html','power.html','fix.html','taste.html','noop.html','diff.html','road.html','rootsoflisp.html','langdes.html','popular.html','javacover.html','avg.html','lwba.html','http://lib.store.yahoo.net/lib/paulgraham/acl1.txt','http://lib.store.yahoo.net/lib/paulgraham/acl2.txt','progbot.html',''];

var wget = require('wget-improved');
var $ = require('jquery');
var src = 'http://www.paulgraham.com/';
var output = '/Users/Mike/Desktop/paulgraham/essays/';
var options = {
};

var counter = 1000;
list.forEach(function(e){
	var src2 = ""
	if(e.indexOf('http') < 0) src2 = src + e;
	//else src2 = src + e;
	if(src2 != "") {
		wget.download(src2, output + counter  + ".html", options);
		counter++;
	}
})
