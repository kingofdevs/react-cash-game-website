import React, { Fragment } from 'react';
import { bool, func } from "prop-types";

import { Link } from "react-router-dom";


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Checkbox from '@material-ui/core/Checkbox';
import routes from "../../constants/routes";

import DOBPicker from "../../components/DOBPicker/DOBPicker";

import classes from "./ScrollDialog.less";

function diff_years(dt2, dt1) {
	let diff = (dt2.getTime() - dt1) / 1000;
	diff /= (60 * 60 * 24);
	return Math.abs(Math.round(diff / 365.25));
}


class ScrollDialog extends React.Component {
	static propTypes = {
		handleClose: func,
		handleConfirmAge: func,
		open: bool
	}

	state = {
		confirmChecked: false,
		data: "",
		datePickerVerify: false,
		dataPrickerErrorShow: false
	}

	handleChange = () => {
		this.setState({ confirmChecked: !this.state.confirmChecked });
	}

	onDataPickerChange = (data) => {
		if (data) {
			let pickedData = data;

			if (diff_years(pickedData, Date.now()) >= 18) {
				pickedData = `${pickedData.getDate()}/${pickedData.getMonth() + 1}/${pickedData.getFullYear()}`;

				this.setState({
					datePickerVerify: pickedData
				});
			}
		}
	}

	onSubmitBtnClick = () => {
		if (!this.state.datePickerVerify) {
			this.setState({
				dataPrickerErrorShow: true
			});
		} else {
			this.props.handleConfirmAge(this.state.datePickerVerify);
		}
	}

	renderDataPicker = () => {
		return (
			<Fragment>
				<div className={classes.scrollDialogDataPickerWrapper}>
					<DOBPicker onDataPickerChange={this.onDataPickerChange}  />

					{ this.state.dataPrickerErrorShow &&
						<p className={classes.scrollDialogErrorLabel}> You have to be at least 18 years old </p>
					}
				</div>
			</Fragment>
		);
	}

	render() {
		const { open, handleClose } = this.props;

		const { confirmChecked } = this.state;

		return (
			<div className={classes.scrollDialog}>
				<Dialog
					open={open}
					classes={{ paperScrollPaper: classes.scrollDialogDialogWrapper }}
					onClose={handleClose}
					scroll="paper"
					aria-labelledby="scroll-dialog-title"
				>
					<DialogTitle id="scroll-dialog-title">Agreement</DialogTitle>
					<DialogContent className={classes.scrollDialogContent}>
						<div className={classes.scrollDialogDialog}>
							<h1 className="center"><b className="green">Island Treasure Co.</b></h1>
							<h3><b>Island Treasure Co Terms of Use, including Official Rules for Island Treasure Co Sweepstakes &amp; Instant Win</b></h3>
							<h5><b>Effective January 1, 2016</b></h5>
							<p>Welcome to Island Treasure Co, a service that lets users of smartphones and other mobile devices play fun games and have the chance to win prizes in our Sweepstakes (as defined below) (the "Service"). The Service, along with our website at www.Island Treasure Co.com (the "Site" and, together, with the Service, our "Services") is owned and operated by Island Treasure Co., Inc. ("Island Treasure Co.," "Sponsor," "we," or "us"). These Terms of Use, including the Official Rules for the Island Treasure Co Sweepstakes &amp; Instant Win (these "Terms and Official Rules") govern your use of and access to the Services and your participation in the Sweepstakes.</p>
							<p>NO PURCHASE NECESSARY TO ENTER OR WIN. VOID WHERE PROHIBITED AND WHERE ANY REGISTRATION OR BONDING REQUIRED. A PURCHASE OR PAYMENT WILL NOT INCREASE YOUR CHANCES OF WINNING.</p>
							<p>The Island Treasure Co Sweepstakes (the "Sweepstakes") consists of a series of overlapping, independent promotional giveaways (each, a "Giveaway"), each with a fixed number of prizes to be awarded over a specified period of time (each, a "Promotional Period"), in which participants can win prizes. Every Giveaway is subject to these Terms and Official Rules, except as expressly stated in writing in the Giveaway description.</p>
							<ul>
								<li>
									<h4><b>1. Eligibility</b></h4>
								</li>
								<li >You must be thirteen (13) years of age or older to use the Services. The Sweepstakes is open to legal residents of the United States who at the time of entry are at least thirteen (13) years old and the age of majority in his or her jurisdiction of residence and have an Internet connection or mobile phone. Employees of the Sponsor and any Promoter (as defined below) and their affiliates, Sweepstakes supervisors and members of their immediate families are not eligible to participate or win. The Sweepstakes is subject to all applicable federal, state and local laws, rules and regulations, and you can only use our Services if it is legal for you to do so as determined by the laws of the country, state, and/or territory in which you live and access the Services. Your computer or mobile device must accept cookies or any similar device used to track entries. See our <a title="privacy-policy" href="https://Island Treasure Co.com/privacy-policy/"><b className="green">Privacy Policy</b>&nbsp;</a>for more information about cookies.</li>
							</ul>
							<ul>
								<li>
									<h4><b>2. Account Registration</b></h4>
								</li>
								<li>You do not have to register with us to play games on the Service, but you do need to register in order to maintain tokens in an account, to play cash and real prize games and to redeem any prizes that you win on the Service. You can register in two different ways. First, you can register with us at any time by providing us with your name, an email address, password and other information on our Service. Second, if you have not yet registered when you seek to play cash and real prize games or redeem tokens on the Service, we will ask you to create an account by providing us with your name, an email address, a password and other information.</li>
							</ul>
							<ul>
								<li>
									<h4><b>3. Use Restrictions</b></h4>
								</li>
								<li>You will not: (a) use the Services for any purpose other than your personal, noncommercial use; (b) access, monitor, or copy any content or information on the Services using any robot, spider, scraper, or other automated means or any manual process for any purpose without our express written permission; (c) take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately large load on our infrastructure; (d) use the Services to place any offline wager of any kind or use the service for any gambling purpose; or (e) intentionally or unintentionally violate any applicable local, state, provincial, national, or international law or regulation.</li>
							</ul>
							<ul>
								<li>
									<h4><b>4. How to Enter the Sweepstakes</b></h4>
								</li>
								<li>To enter the Sweepstakes, just access the Island Treasure Co game on your computer or mobile phone. There is no cost to play the game. Each time you complete play of a "virtual scratch card" or the described game play, you will be eligible to win a prize. A prize may be money, third-party goods or services, or virtual tokens, goods or services. Clicking through to any other linked pages, including sponsored advertisements, will not result in additional Sweepstakes entries.</li>
							</ul>
							<ul>
								<li>
									<h4><b>5. Current Prizes</b></h4>
								</li>
								<li>For each Giveaway, the time period, prize(s), odds of winning, winner selection methodology, and certain other details will be indicated with the particular Giveaway. Just click on the "Rules" link on any Giveaway promotion to review these details for the particular Giveaway.</li>
							</ul>
							<ul>
								<li>
									<h4><b>6. How to Claim a Prize</b></h4>
								</li>
								<li>You will be notified immediately if you have won a prize. To claim your prize, you must follow the instructions in your notification or by clicking on the “Claim Prize” button and following instructions. Failure to timely and properly claim any prize may result in forfeiture. For large prize wins of $100 or more, if you do not claim, register and cash out within 7 days of Island Treasure Co providing notice, the prize will be placed back in the prize pool to be awarded to someone else at random during the promotional period. All personally identifiable information submitted by any winner to claim a prize is subject to Sponsor’s <b><a title="privacy-policy" href="https://Island Treasure Co.com/privacy-policy/" className="green">Privacy Policy</a></b>.</li>
							</ul>
							<ul>
								<li>
									<h4><b>7. Winner Verification; Prize Receipt</b></h4>
								</li>
								<li>Winners may be required to show verifiable proof of entitlement to win and to sign an affidavit of eligibility and publicity release in order to claim their Prize. If you have not received your Prize within six weeks after the end of the relevant Promotional Period, you must notify the Sponsor at <a href="mailto:support@Island Treasure Co.com?subject=Winner%20Verification;%20Prize%20Receipt%20(from%20Island Treasure Co.com/terms)" className="green">support@Island Treasure Co.com</a>. Failure to notify the Sponsor of non-receipt within eight weeks after the end of the Promotional Period will result in forfeiture of the Prize.</li>
							</ul>
							<ul>
								<li>
									<h4><b>8. Account Inactivity and Termination</b></h4>
								</li>
								<li>There is no charge to establish your account. If your account is inactive for more than 30 consecutive days, we reserve the right to debit your account balance $1.00 per month to recover the cost of account maintenance until you reactivate your account by accessing your account or participate in a Giveaway or (ii) your account balance is zero. If the balance in your inactive account is or becomes zero, we may close your account permanently and cease to maintain your account records. Additionally, if your account is inactive for more than 30 consecutive days, we will debit your account the full token balance. Tokens are not real money, do not have monetary value, and may not be exchanged for anything of monetary value from outside our services without our written permission. Upon written request, we will reinstitute your account balance to the same levels as when your account went dormant.</li>
							</ul>
							<ul>
								<li>
									<h4><b>9. Publicity</b></h4>
								</li>
								<li>Participation constitutes consent to use of Entrant’s name, likeness and address (city, state) for promotional purposes in any media, worldwide, without further payment or consideration.</li>
							</ul>
							<ul>
								<li>
									<h4><b>10. General Conditions</b></h4>
								</li>
								<li>Any Giveaway may be canceled, suspended and/or modified, in whole or in part, if in the opinion of the Sponsor any fraud, technical failure or other factor beyond its control may impair the integrity or proper functioning of the Sweepstakes. Neither the Sponsor nor any Promoter is responsible for malfunctions, network connections, email delivery problems, systems failure or incompatibility, typographical, technical or key-stroke errors, or interruptions in electronic communications or internet service.</li>
								<li>No substitution, assignment or transfer of any prize is permitted, except by Sponsor, who has the right to substitute a prize. Prizes may be offered in different promotional presentations, combined with other prizes or substituted with another of comparable or greater value by Sponsor. (For example, a $10 prize may be offered or fulfilled as cash, a gift card or merchandise of comparable value.) No other cash option for, or substitution, assignment or transfer of, any prize is permitted. Prizes may be subject to third-party terms and conditions. Claimed prizes will generally be awarded within approximately six weeks after the end of the relevant Promotional Period. Unclaimed prizes will not be awarded. Winner is responsible for all taxes and costs or fees associated with the receipt and/or use of any prize.</li>
								<li>Sponsor reserves the right, in the case where all prizes have been awarded prior to the scheduled end of the Promotion Period for any Giveaway, either to end the Giveaway or to replace some or all of such prizes and continue.</li>
								<li>Sponsor reserves the right to withhold payments, to obtain necessary tax information from winners, and to submit tax-related documents as required by law. If Sponsor believes that the tax-related form you provide is inaccurate or incomplete, it will request from you a corrected and/or completed form. If you do not provide a correct and complete form following any such request, then Sponsor will not deliver to you your prize or any further prizes for such calendar year, and you will be automatically deemed to have waived any right you might otherwise have to such prize(s).</li>
								<li>You may not enter with multiple identities or use any automated system or other device or artifice to enter or obtain more than the specified number of qualified entries. If the Sponsor changes any new or revised entry limits or qualifications, or elects to shorten the Promotion Period, it will provide at least one day’s prior notice through these Terms and Official Rules (except in cases of suspected fraud or technical problems). You and your entries may be disqualified if you attempt to circumvent these Terms and Official Rules. ANY ATTEMPT TO DELIBERATELY DAMAGE ANY WEBSITE OR UNDERMINE THE LEGITIMATE OPERATION OF THE SERVICES OR THE SWEEPSTAKES MAY BE A VIOLATION OF CRIMINAL AND CIVIL LAWS. SHOULD SUCH AN ATTEMPT BE MADE, THE SPONSOR RESERVES THE RIGHT TO SEEK DAMAGES OR OTHER REMEDIES FROM ANY SUCH PERSON(S) RESPONSIBLE FOR THE ATTEMPT TO THE FULLEST EXTENT PERMITTED BY LAW.</li>
							</ul>
							<ul>
								<li>
									<h4><b>11. Restrictions on Access</b></h4>
								</li>
								<li>Notwithstanding any provision of these Terms and Official Rules, we reserve the right, without notice and in our sole discretion, to terminate your license to use the Services and to block, restrict, and prevent your future access to, and use of, the Services and the Sweepstakes. Additionally, we reserve the right to modify, discontinue, and restrict, temporarily or permanently, all or part of the Services without notice in our sole discretion. Neither we nor our suppliers or licensors will be liable to you or to any third party for any modification, discontinuance, or restriction of the Services and the Sweepstakes.</li>
								<li>In the event that we deem in our sole discretion that you have engaged or attempted to engage in fraudulent, unlawful, dishonest, or improper activity while using the Services, we will be entitled to take such action as we see fit in our sole discretion, including immediately limiting or blocking access to the Services, terminating your account with us, and taking legal action against you.</li>
							</ul>
							<ul>
								<li>
									<h4><b>12. Submissions</b></h4>
								</li>
								<li>You acknowledge and agree that any materials, including but not limited to comments, suggestions, ideas, or other information, provided by you in the form of email or other submissions to us (collectively, "Submissions"), are non-confidential and you hereby grant to us a perpetual and irrevocable license to use your Submissions for any purpose without compensation or attribution to you.</li>
							</ul>
							<ul>
								<li>
									<h4><b>13. Trademarks</b></h4>
								</li>
								<li>Island Treasure Co, Island Treasure Co., the Island Treasure Co logo, and any other product or service name or slogan contained on the Services are our trademarks as well as trademarks of our suppliers or licensors, and may not be copied, imitated or used, in whole or in part, without our prior written permission or permission by the applicable trademark holder. All other trademarks, registered trademarks, product names and company names or logos mentioned on the Services are the property of their respective owners. Reference to any products, services, processes or other information, by trade name, trademark, manufacturer, supplier or otherwise, does not constitute or imply our endorsement, sponsorship, or recommendation thereof, or vice versa.</li>
							</ul>
							<ul>
								<li>
									<h4><b>14. Ownership</b></h4>
								</li>
								<li>We, our affiliates, and our suppliers and licensors own all right, title, and interest, including all intellectual property rights, in and to the Services. Except for those rights expressly granted in these Terms and Official Rules, no other rights are granted, either express or implied, to you.</li>
							</ul>
							<ul>
								<li>
									<h4><b>15. Third-Party Content</b></h4>
								</li>
								<li>The Services may contain links to third-party content, such as advertisements ("<b>Third-Party Content</b>"). We do not monitor, endorse, or adopt, or have any control over, any Third-Party Content. We do not undertake any responsibility to update or review any Third Party Content and we do not make any guarantee as to its accuracy or completeness.</li>
								<li>Additionally, if you follow a link or otherwise navigate away from the Services, please be aware that these Terms and Official Rules will not govern your activities away from the Services. You should review the applicable terms and policies, including privacy and data gathering practices, of any Third-Party Content provider to which you navigate from the Services. You access and use Third-Party Content at your own risk.</li>
								<li>The Services may contain advertisements and promotions from third parties. Your business dealings or correspondence with, or participation in promotions of, advertisers other than us, and any terms, conditions, warranties, or representations associated with such dealings, are solely between you and such third party.</li>
							</ul>
							<ul>
								<li>
									<h4><b>16. Privacy Policy</b></h4>
								</li>
								<li>We may collect registration information and other information about you through the Services. Our collection, use, and disclosure of this information is governed by our <b><a title="privacy-policy" href="https://Island Treasure Co.com/privacy-policy/" className="green">Privacy Policy</a></b>.</li>
							</ul>
							<ul>
								<li>
									<h4><b>17. Indemnification</b></h4>
								</li>
								<li>You will defend, indemnify and hold harmless us, our subsidiaries, affiliates, partners, and third-party advertisers, and their respective directors, officers, agents, employees, licensors, and suppliers from and against any costs, damages, expenses, and liabilities (including, but not limited to, reasonable attorneys" fees) arising out of or related to your use of the Services, your violation of these Terms and Official Rules, or your violation of any rights of a third party.</li>
							</ul>
							<ul>
								<li>
									<h4><b>18. Disclaimers and Release</b></h4>
								</li>
								<li>YOUR USE OF THE SERVICES, INCLUDING, WITHOUT LIMITATION, YOUR USE OF ANY CONTENT ACCESSIBLE THROUGH THE SERVICES AND YOUR PARTICIPATION IN THE SWEEPSTAKES, IS AT YOUR SOLE RISK. THE SERVICES, AND ALL CONTENT AVAILABLE ON AND THROUGH THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. SPONSOR MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, REGARDING THE SERVICES, ANY PRIZE, OR YOUR PARTICIPATION IN THE SWEEPSTAKES, AND EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. SPONSOR DOES NOT WARRANT UNINTERRUPTED USE OR OPERATION OF THE SERVICES OR YOUR ACCESS TO ANY CONTENT OR TO THE SWEEPSTAKES. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE SERVICES WILL CREATE ANY WARRANTY REGARDING THE SERVICES, THE SWEEPSTAKES, OR SPONSOR THAT IS NOT EXPRESSLY STATED IN THESE TERMS AND OFFICIAL RULES. SOME JURISDICTIONS MAY PROHIBIT A DISCLAIMER OF WARRANTIES AND YOU MAY HAVE OTHER RIGHTS THAT VARY FROM JURISDICTION TO JURISDICTION.</li>
								<li>BY USING THE SERVICES, PARTICIPATING IN THE SWEEPSTAKES, OR RECEIVING ANY PRIZE, YOU AGREE TO AND HEREBY RELEASE AND HOLD HARMLESS SPONSOR, AND ITS SUBSIDIARIES, AFFILIATES, SUPPLIERS, DISTRIBUTORS, ADVERTISING/SWEEPSTAKES AGENCIES, AND PRIZE SUPPLIERS, AND EACH OF THEIR RESPECTIVE PARENT COMPANIES AND EACH SUCH COMPANY’S OFFICERS, DIRECTORS, EMPLOYEES AND AGENTS (COLLECTIVELY, THE "<b>RELEASED PARTIES</b>") FROM AND AGAINST ANY CLAIM OR CAUSE OF ACTION, INCLUDING, BUT NOT LIMITED TO, PERSONAL INJURY, DEATH, OR DAMAGE TO OR LOSS OF PROPERTY, ARISING OUT OF USE OF THE SERVICES, PARTICIPATION IN THE SWEEPSTAKES OR RECEIPT OR USE OR MISUSE OF ANY PRIZE. THE RELEASED PARTIES ARE NOT RESPONSIBLE FOR: (A) ANY INCORRECT OR INACCURATE INFORMATION, WHETHER CAUSED BY ENTRANTS, PRINTING ERRORS OR BY ANY OF THE EQUIPMENT OR PROGRAMMING ASSOCIATED WITH OR UTILIZED IN THE SWEEPSTAKES; (B) TECHNICAL FAILURES OF ANY KIND, INCLUDING, BUT NOT LIMITED TO MALFUNCTIONS, INTERRUPTIONS, OR DISCONNECTIONS IN PHONE LINES OR NETWORK HARDWARE OR SOFTWARE; (C) UNAUTHORIZED HUMAN INTERVENTION IN ANY PART OF THE ENTRY PROCESS OR THE SWEEPSTAKES; (D) TECHNICAL OR HUMAN ERROR WHICH MAY OCCUR IN THE ADMINISTRATION OF THE SWEEPSTAKES OR THE PROCESSING OF ENTRIES; OR (E) ANY INJURY OR DAMAGE TO PERSONS OR PROPERTY WHICH MAY BE CAUSED, DIRECTLY OR INDIRECTLY, IN WHOLE OR IN PART, FROM YOUR USE OF THE SERVICES, PARTICIPATION IN THE SWEEPSTAKES, OR RECEIPT OR USE OR MISUSE OF ANY PRIZE. If for any reason an entry is confirmed to have been erroneously deleted, lost, or otherwise destroyed or corrupted, entrant’s sole remedy is another entry in the promotion, provided that if it is not possible to award another entry due to discontinuance of the promotion, or any part of it, for any reason, Sponsor, at its discretion, may elect to hold a random drawing from among all eligible entries received up to the date of discontinuance for any or all of the prizes offered herein. No more than the stated number of prizes will be awarded. In the event that production, technical, programming or any other reasons cause more than stated number of prizes as set forth in these Terms and Official Rules to be available and/or claimed, Sponsor reserves the right to award only the stated number of prizes by a random drawing among all legitimate, unawarded, eligible prize claims.</li>
							</ul>
							<ul>
								<li>
									<h4><b>19. Limitations of Liability</b></h4>
								</li>
								<li>NEITHER WE NOR ANY OTHER RELEASED PARTY WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF WE OR ANY RELEASED PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF THESE DAMAGES), ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF OR PARTICIPATION IN, OR YOUR INABILITY TO ACCESS, USE, OR PARTICIPATE IN, THE SERVICES, ANY CONTENT MADE AVAILABLE THROUGH THE SERVICES, OR THE SWEEPSTAKES. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION IN THIS SECTION 18 MAY NOT APPLY TO YOU.</li>
								<li>THE MAXIMUM TOTAL LIABILITY OF SPONSOR AND ALL OTHER RELEASED PARTIES TO YOU FOR ALL CLAIMS UNDER THESE TERMS AND OFFICIAL RULES, WHETHER IN CONTRACT, TORT, OR OTHERWISE, IS THE GREATER OF US $50 OR THE VALUE OF THE APPLICABLE PRIZE. EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A LIMITATION OF LIABILITY, DISCLAIMER OF WARRANTIES, OR EXCLUSION OF DAMAGES IS TO ALLOCATE THE RISKS UNDER THESE TERMS BETWEEN THE PARTIES. THIS ALLOCATION IS AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN THE PARTIES. EACH OF THESE PROVISIONS IS SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS OF THESE TERMS AND OFFICIAL RULES. THE LIMITATIONS IN THIS SECTION 18 WILL APPLY EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.</li>
							</ul>
							<ul>
								<li>
									<h4><b>20. Decisions of Sponsor and Identity of Entrants</b></h4>
								</li>
								<li>Decisions of the Sponsor, or its appointed designees, are final with respect to the Sweepstakes. You agree to abide by these Terms and Official Rules and any decision Sponsor makes regarding the Sweepstakes, which Sponsor or its designees shall make in their sole discretion. In the event of a dispute as to any entry, the authorized account holder of the email address will be deemed to be the entrant. The "authorized account holder" is the natural person assigned the account by the underlying email address by an Internet access provider, online service provider or other organization responsible for assigning email addresses for the domain associated with the submitted address. Each potential winner may be required to show proof of being the authorized account holder. Sponsor shall have the right to determine the identity of a winner in its sole discretion. Failure by the Sponsor to enforce any provision in these Terms and Official Rules shall not constitute a waiver of that provision.</li>
							</ul>
							<ul>
								<li>
									<h4><b>21. Sponsor; Promoters</b></h4>
								</li>
								<li>The Sweepstakes is sponsored by Island Treasure Co., PO BOX 87, New York, NY 10018. The Sponsor may contract with others (each, a "<b>Promoter</b>") to make the Sweepstakes available through Island Treasure Co opportunities offered on their respective Web sites or other channel (each, a "<b>Promoter Channel</b>"). All Participants have the same chance to win any limitations apply at all times regardless of the Promoter Channel through which they enter. See Sweepstakes Facts for estimated odds of winning and other important messages. The Sponsor and some Promoters may offer additional benefits or features to Participants, but such benefits or features are independent of the Sweepstakes, do not affect the odds of winning a Prize and are not the responsibility of any other person.</li>
							</ul>
							<ul>
								<li>
									<h4><b>22. Disputes and Governing Law</b></h4>
								</li>
								<li>DISPUTES: THESE TERMS AND OFFICIAL RULES AND THE PROMOTION ARE GOVERNED BY, AND WILL BE CONSTRUED IN ACCORDANCE WITH, THE LAWS OF THE STATE OF NEW YORK, AND THE FORUM AND VENUE FOR ANY DISPUTE ARISING OUT OF OR RELATING TO THESE TERMS AND OFFICIAL RULES SHALL BE IN THE COUNTY OF MANHATTAN, NEW YORK. IF THE CONTROVERSY OR CLAIM IS NOT OTHERWISE RESOLVED THROUGH DIRECT DISCUSSIONS OR MEDIATION, IT SHALL THEN BE RESOLVED BY FINAL AND BINDING ARBITRATION ADMINISTERED BY JUDICIAL ARBITRATION AND MEDIATION SERVICES, INC., IN ACCORDANCE WITH ITS STREAMLINED ARBITRATION RULES AND PROCEDURES OR SUBSEQUENT VERSIONS THEREOF ("JAMS RULES"). THE JAMS RULES FOR SELECTION OF AN ARBITRATOR SHALL BE FOLLOWED, EXCEPT THAT THE ARBITRATOR SHALL BE EXPERIENCED AND LICENSED TO PRACTICE LAW IN NEW YORK. ANY SUCH CONTROVERSY OR CLAIM WILL BE ARBITRATED ON AN INDIVIDUAL BASIS, AND WILL NOT BE CONSOLIDATED IN ANY ARBITRATION WITH ANY CLAIM OR CONTROVERSY OF ANY OTHER PARTY. ALL PROCEEDINGS BROUGHT PURSUANT TO THIS PARAGRAPH WILL BE CONDUCTED IN THE COUNTY OF MANHATTAN, NEW YORK. THE REMEDY FOR ANY CLAIM SHALL BE LIMITED TO ACTUAL DAMAGES, AND IN NO EVENT SHALL ANY PARTY BE ENTITLED TO RECOVER PUNITIVE, EXEMPLARY, CONSEQUENTIAL, OR INCIDENTAL DAMAGES, INCLUDING ATTORNEY"S FEES OR OTHER SUCH RELATED COSTS OF BRINGING A CLAIM, OR TO RESCIND THIS AGREEMENT OR SEEK INJUNCTIVE OR ANY OTHER EQUITABLE RELIEF.</li>
							</ul>
							<ul>
								<li>
									<h4><b>23. Virtual Tokens</b></h4>
								</li>
								<li>The Services may include an opportunity for you to earn virtual currency ("<b>Virtual Tokens</b>") to, in our discretion, license virtual digital goods, or to obtain discounts, offers or other goods or services, or to exchange for cash (together, "<b>Redeemed Goods</b>"). Regardless of what we call them, Virtual Tokens are not real money, and do not have monetary value. You acknowledge that Virtual Tokens are not real currency. We make no guarantee as to the nature, quality or value of the features of any third-party good or services that will be accessible through the use of Virtual Tokens, or the availability or supply of Virtual Tokens.</li>
								<li>Virtual Tokens obtained via the Services are provided to you under a limited, personal, revocable, non-transferable, non-sublicenseable license to use within the Services. Virtual Tokens may not be transferred or resold in any manner, including, without limitation, by means of any direct sale or auction service. Redeemed Goods may be subject to a separate third-party license or agreement. You have no property interest, right or title in or to any such Virtual Tokens. Any Virtual Tokens balance shown in your account does not constitute a real-world balance or reflect any stored value, but instead constitutes a measurement of the extent of your license. We may at any time expire free or promotional Virtual Tokens given to you. You agree that under no circumstances are we liable to you for any damages or claims that may arise from the loss or use of your Virtual Tokens regardless of the circumstances. You absolve us of any responsibility to maintain or update your Virtual Tokens account. However, if there is a loss of Virtual Tokens in your account due to technical or operational problems with the Services, we will refund the lost Virtual Tokens once the loss has been verified. Without limiting any of the foregoing, our maximum liability or responsibility to you is to refund the Virtual Tokens lost.</li>
								<li>We will, in our sole discretion, determine and communicate the availability and exchange rate for any Virtual Tokens and Redeemed Goods, which may be modified at any time. You must comply with any individual Redeemed Goods limitations as indicated via the Services or to get the Redeemed Good, <b>including the requirement of having at least $1.00 in your wallet before you can redeem the cash amount in your wallet. </b> We reserve the right to cancel, restrict or terminate Virtual Tokens and/or Redeemed Goods at any time for any reason. All Redeemed Goods are subject to availability.</li>
								<li>You may choose a Redeemed Good that is still available for which you have accumulated sufficient Virtual Tokens for redemption. Select the Redeemed Good you wish and follow and instructions to complete the redemption process. As part of the redemption process, you may receive a confirmation email or message from us and/or our designee or Redeemed Goods partner. Emails or messages will be sent to the email address or other contact information assigned to your account. All acquisitions of Virtual Tokens and redemptions for Redeemed Goods are final. Once Virtual Tokens has been lost or spent, they will be subtracted from your account and cannot be refunded or returned, except in our sole discretion. No Virtual Tokens will be re-credited to your account in the event of a return or exchange of a Redeemed Good, or any problem with any Redeemed Good.</li>
							</ul>
							<ul>
								<li>
									<h4><b>24. Sweepstakes Results; Official Rules</b></h4>
								</li>
								<li>For Sweepstakes results and/or a copy of these Terms and Official Rules, send a hand-printed, self-addressed, stamped envelope to the Sponsor at the address above within thirty (30) days after the end of the Promotional Period. VT and MA residents may exclude return postage.</li>
								<li>You Have Not Yet Won. All Entries Have The Same Chance Of Winning. The winner has not been identified. We don’t know who the winner is. If you enter our Sweepstakes, your entry will have the same chance to win as every other entry.</li>
								<li>Enter For Free. You don't have to buy anything to enter. Just follow the instructions in the Official Rules.</li>
								<li>Buying Won’t Help You Win. Your chances of winning without a purchase are the same as the chances of someone who buys something. It would not be lawful to give any advantage to buyers in a Sweepstakes.</li>
							</ul>
							<ul>
								<li>
									<h4><b>25. General Legal Notices</b></h4>
								</li>
								<li>These Terms and Official Rules constitute the entire agreement between you and us concerning the Services and the Sweepstakes and supersede all prior agreements or communications between you and us regarding the subject matter of these Terms and Official Rules. These Terms and Official Rules may not be modified except in a writing, signed by both parties, or by a change to these Terms and Official Rules made by Sponsor as authorized in these Terms and Official Rules. Any provision of these Terms and Official Rules that is found to be invalid, unlawful, or unenforceable will be severed from these Terms and Official Rules, and the remaining provisions of these Terms and Official Rules will continue to be in full force and effect. The section headings and titles in these Terms and Official Rules are for convenience only and have no legal or contractual effect. Any provision in these Terms and Official Rules that by its nature should survive the termination of your license to access the Services or any termination of these Terms and Official Rules (including, without limitation, provisions governing indemnification, limitations on liability, disclaimers of warranty, and ownership of intellectual property) will continue to remain in full force and effect after any such termination.</li>
							</ul>
							<ul>
								<li>
									<h4><b>26. Force Majeure</b></h4>
								</li>
								<li>We will not be liable to you for any delay or failure to perform any obligation under these Terms and Official Rules if the delay or failure is due to circumstances beyond our reasonable control.</li>
							</ul>
							<ul>
								<li>
									<h4><b>27. Consent to Electronic Communications</b></h4>
								</li>
								<li>By using the Services, you consent to receiving electronic communications from us. These communications may include notices about your account and information concerning or related to the Services. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, including that such communications be in writing.</li>
							</ul>
							<ul>
								<li>
									<h4><b>28. Disclosures</b></h4>
								</li>
								<li>The services provided under these Terms and Official Rules are offered by Island Treasure Co., located at PO Box 87, New York, NY 10018. You may contact us by sending correspondence to the foregoing address or by emailing us at <a href="mailto:support@Island Treasure Co.com?subject=Regarding:%20Disclosures%20(from%20Island Treasure Co.com/terms)" className="green">support@Island Treasure Co.com</a>. If you are a California resident, you may have these Terms and Official Rules mailed to you electronically by sending a letter to the foregoing address with your electronic mail address and a request for these Terms and Official Rules.</li>
							</ul>
						</div>
					</DialogContent>
					<DialogActions className={classes.scrollDialogDialogAction}>
						<div className={classes.scrollDialogDataPicker}>
							{ this.renderDataPicker() }
						</div>

						<div>
							<Link className={classes.scrollDialogPrivacyPage} to={routes.privacyPage} target="_blank"> Privacy policy </Link>
							<p> Confirm rules
								<Checkbox
									checked={confirmChecked}
									onChange={this.handleChange}
									color={"primary"}
								/>
							</p>
							<div className={classes.scrollDialogButtonWrapper}>
								<Button onClick={handleClose} color="primary">
										Cancel
								</Button>
								<Button disabled={!confirmChecked} onClick={this.onSubmitBtnClick} color="primary">
									Agree
								</Button>
							</div>
						</div>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default ScrollDialog;
