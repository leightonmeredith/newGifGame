import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPlayer, Player } from '../players/player';

@Component({
    selector: 'app-gif-loader',
    templateUrl: './gif-loader.component.html',
    styleUrls: ['./gif-loader.component.scss']
})

export class GifLoaderComponent {
    constructor(public dialog: MatDialog) { }
    pageTitle = 'gif Off!';
    selectedGif: string;
    selectedPlayer: IPlayer;
    newPlayer: string;
    gifImages: string[] = [

        '../../assets/2019-09-28/awe.gif',
        '../../assets/2019-09-28/babyBumpSlide.gif',
        '../../assets/2019-09-28/babySpin.gif',
        '../../assets/2019-09-28/catchFail.gif',
        '../../assets/2019-09-28/catStare.gif',
        '../../assets/2019-09-28/catwalkDance.gif',
        '../../assets/2019-09-28/chimpChew.gif',
        '../../assets/2019-09-28/coffeeBreak.gif',
        '../../assets/2019-09-28/confused.gif',
        '../../assets/2019-09-28/crushed.gif',
        '../../assets/2019-09-28/cuteChill.gif',
        '../../assets/2019-09-28/danceNow.gif',
        '../../assets/2019-09-28/dancingBaby.gif',
        '../../assets/2019-09-28/dancingKid.gif',
        '../../assets/2019-09-28/excitedDog.gif',
        '../../assets/2019-09-28/fakeLaugh.gif',
        '../../assets/2019-09-28/fakeSmile.gif',
        '../../assets/2019-09-28/finally.gif',
        '../../assets/2019-09-28/frozenLife.gif',
        '../../assets/2019-09-28/happyDance.gif',
        '../../assets/2019-09-28/headbanger.gif',
        '../../assets/2019-09-28/hhogWalk.gif',
        '../../assets/2019-09-28/howDareYou.gif',
        '../../assets/2019-09-28/humpDay.gif',
        '../../assets/2019-09-28/humpDog.gif',
        '../../assets/2019-09-28/jungleDress.gif',
        '../../assets/2019-09-28/kingOfQueenCouch.gif',
        '../../assets/2019-09-28/monkeyCollapse.gif',
        '../../assets/2019-09-28/officeLaugh.gif',
        '../../assets/2019-09-28/officePanic.gif',
        '../../assets/2019-09-28/omg.gif',
        '../../assets/2019-09-28/omgWow.gif',
        '../../assets/2019-09-28/parrotDead.gif',
        '../../assets/2019-09-28/payDay.gif',
        '../../assets/2019-09-28/powerNap.gif',
        '../../assets/2019-09-28/scarfaceDance.gif',
        '../../assets/2019-09-28/serenaFtw.gif',
        '../../assets/2019-09-28/serenaPissed.gif',
        '../../assets/2019-09-28/skateboardDad.gif',
        '../../assets/2019-09-28/thisIsUsStare.gif',
        '../../assets/2019-09-28/tinyHandsCough.gif',
        '../../assets/2019-09-28/tortoiseHare.gif',
        '../../assets/2019-09-28/turtleFail.gif',
        '../../assets/2019-09-28/weirdDance.gif',

        '../../assets/2019-09-27/donkeyKong_intro.gif',
        '../../assets/2019-09-27/meerkat_sleepy.gif',
        '../../assets/2019-09-27/daveChappelle_run.gif',
        '../../assets/2019-09-27/girlBottle_drop.gif',
        '../../assets/2019-09-27/dogHop_stairs.gif',
        '../../assets/2019-09-27/bernie_boxing.gif',
        '../../assets/2019-09-27/kevinHart_stare.gif',
        '../../assets/2019-09-27/whyYouAlwaysLying.gif',
        '../../assets/2019-09-27/catTrip_baby.gif',
        '../../assets/2019-09-27/draymond_stare.gif',
        '../../assets/2019-09-27/draymond_stare2.gif',
        '../../assets/2019-09-27/baby_landing.gif',
        '../../assets/2019-09-27/parrot_beef.gif',
        '../../assets/2019-09-27/dogPaw_fail.gif',
        '../../assets/2019-09-27/owl_poop.gif',
        '../../assets/2019-09-27/sloane_ugh.gif',
        '../../assets/2019-09-27/catReject_kissing.gif',
        '../../assets/2019-09-27/puppySit_cat.gif',
        '../../assets/2019-09-27/falcon_stare.gif',
        '../../assets/2019-09-27/boy_no.gif',
        '../../assets/2019-09-27/nerd_yes.gif',

        '../../assets/2019-09-17/amor.gif',
        '../../assets/2019-09-17/awkwardWtf.gif',
        '../../assets/2019-09-17/bearWave.gif',
        '../../assets/2019-09-17/bertShocked.gif',
        '../../assets/2019-09-17/boredToDeath.gif',
        '../../assets/2019-09-17/bringItIn.gif',
        '../../assets/2019-09-17/bruceDisgusted.gif',
        '../../assets/2019-09-17/cardiBEntrance.gif',
        '../../assets/2019-09-17/cardiBReaction.gif',
        '../../assets/2019-09-17/dogRaiseRoof.gif',
        '../../assets/2019-09-17/goodJob.gif',
        '../../assets/2019-09-17/kermitSipTea.gif',
        '../../assets/2019-09-17/mikeTysonExcited.gif',
        '../../assets/2019-09-17/minionLaugh.gif',
        '../../assets/2019-09-17/monicaBeads.gif',
        '../../assets/2019-09-17/monkeyHuh.gif',
        '../../assets/2019-09-17/ndtWhatever.gif',
        '../../assets/2019-09-17/okurrr.gif',
        '../../assets/2019-09-17/oprahJudge.gif',
        '../../assets/2019-09-17/overIt.gif',
        '../../assets/2019-09-17/patOnBack.gif',
        '../../assets/2019-09-17/patrickCrush.gif',
        '../../assets/2019-09-17/pullUpAChair.gif',
        '../../assets/2019-09-17/ridePony.gif',
        '../../assets/2019-09-17/rockSniff.gif',
        '../../assets/2019-09-17/sayWhat.gif',
        '../../assets/2019-09-17/scaryGirl.gif',
        '../../assets/2019-09-17/shaqShimmy.gif',
        '../../assets/2019-09-17/snuggieExcited.gif',
        '../../assets/2019-09-17/soProud.gif',
        '../../assets/2019-09-17/sprinter.gif',
        '../../assets/2019-09-17/unimpressedOffice.gif',
        '../../assets/2019-09-17/wakaFlakaOk.gif',
        '../../assets/2019-09-17/weirdHighFive.gif',
        '../../assets/2019-09-17/whoCares_Wank.gif',
        '../../assets/2019-09-17/willOmg.gif',
        '../../assets/2019-09-17/workChuckle.gif',


        '../../assets/2019-09-16/blacksonWideEyes.gif',
        '../../assets/2019-09-16/catwalk_beef.gif',
        '../../assets/2019-09-16/confusion.gif',
        '../../assets/2019-09-16/fireEye.gif',
        '../../assets/2019-09-16/funnyNotFunny.gif',
        '../../assets/2019-09-16/hairDryer_powder.gif',
        '../../assets/2019-09-16/heelsDirtRoad_wobble.gif',
        '../../assets/2019-09-16/raisedEyebrow.gif',
        '../../assets/2019-09-16/simonWhatIsHappening.gif',
        '../../assets/2019-09-16/sipTeaThug.gif',
        '../../assets/2019-09-16/steveHuhvey.gif',
        '../../assets/2019-09-16/steveJudgement.gif',
        '../../assets/2019-09-16/steveSuspense.gif',
        '../../assets/2019-09-16/stunnedHost.gif',
        '../../assets/2019-09-16/suspect.gif',
        '../../assets/2019-09-16/trevorNoahLaugh.gif',
        '../../assets/2019-09-16/waterLaugh.gif',
        '../../assets/2019-09-16/youSerious.gif',
        '../../assets/2019-09-16/youTripping.gif',

        '../../assets/drunk/accidentalVodkaPour.gif',
        '../../assets/drunk/bigWhiteWine.gif',
        '../../assets/drunk/broTackle.gif',
        '../../assets/drunk/christineMeasurement.gif',
        '../../assets/drunk/drakeBusted.gif',
        '../../assets/drunk/familyGuyLook.gif',
        '../../assets/drunk/mullallyJuiceBoxes.gif',
        '../../assets/drunk/rollerCoasterPassOut.gif',
        '../../assets/drunk/sexCityShot.gif',
        '../../assets/drunk/spongeBobMoves.gif',
        '../../assets/drunk/wineChaser.gif',

        '../../assets/afraid/babyJump.gif',
        '../../assets/afraid/babyShadow.gif',
        '../../assets/afraid/boyScared.gif',
        '../../assets/afraid/happyScaredBaby.gif',
        '../../assets/afraid/homerGrassFade.gif',
        '../../assets/afraid/kermitScared.gif',
        '../../assets/afraid/puppyShadow.gif',
        '../../assets/afraid/scaredBaby.gif',
        '../../assets/afraid/shookBaby.gif',
        '../../assets/afraid/simpsonsAwkward.gif',
        '../../assets/afraid/trumpScared.gif',

        '../../assets/sad/movedToTears.gif',
        '../../assets/sad/sadAndreJohnson.gif',
        '../../assets/sad/sadSpongeBob.gif',
        '../../assets/sad/sadTears.gif',
        '../../assets/sad/sourPrincess.gif',
        '../../assets/sad/willFerrellSad.gif',
        '../../assets/sad/willFerrellSad2.gif',

        '../../assets/annoyed/babyWhatever.gif',
        '../../assets/annoyed/boyOverIt.gif',
        '../../assets/annoyed/doorRip.gif',
        '../../assets/annoyed/firedUp.gif',
        '../../assets/annoyed/hardenEyeRoll.gif',
        '../../assets/annoyed/judgeJudyAnnoyed.gif',
        '../../assets/annoyed/kevHartAnnoyed.gif',
        '../../assets/annoyed/obamaWTF.gif',
        '../../assets/annoyed/rihannaAnnoyed.gif',
        '../../assets/annoyed/squidwardAnnoyed.gif',
        '../../assets/annoyed/trumpWhatever.gif',
        '../../assets/annoyed/whitneyWhatever.gif',

        '../../assets/seductive/charlieSheen.gif',
        '../../assets/seductive/glassesOff.gif',
        '../../assets/seductive/ketchupExplode.gif',
        '../../assets/seductive/nunTurnedOn.gif',
        '../../assets/seductive/shaqKissFace.gif',
        '../../assets/seductive/spongeBob.gif',
        '../../assets/seductive/squidwardTwerk.gif',
        '../../assets/seductive/trumpSexy.gif',
        '../../assets/seductive/trumpSexyLadies.gif',
        '../../assets/seductive/waterBottleCoolOff.gif'
    ];
    // TODO: needed for spinner
    subscribeTimer: number;
    timeLeft = 100;

    // TODO: Remove after table shit resolved
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;


    players: IPlayer[] = [
        {
            id: 1,
            name: 'M',
            pass: 5,
            wins: 0
        } , {
            id: 2,
            name: 'Tomb Raider',
            pass: 5,
            wins: 0
        } , {
            id: 3,
            name: 'Marvo',
            pass: 5,
            wins: 0
        }, {
            id: 4,
            name: 'Other',
            pass: 5,
            wins: 0
        }, {
            id: 5,
            name: 'A',
            pass: 5,
            wins: 0
        } , {
            id: 6,
            name: 'B',
            pass: 5,
            wins: 0
        } , {
            id: 7,
            name: 'C',
            pass: 5,
            wins: 0
        }, {
            id: 8,
            name: 'D',
            pass: 5,
            wins: 0
        },
    ];

    playersDisplayedColumns: string[] = ['name', 'pass', 'wins'];
    playersDataSource = this.players;

    removePass(player: IPlayer, gif: string) {
        player.pass--;
        this.getRandomGif(player, gif);
    }

    getRandomGif(player: IPlayer, gif: string): void {
        this.selectedPlayer = player;
        this.selectedGif = this.gifImages[Math.floor(Math.random() * this.gifImages.length)];
        if (this.selectedGif === gif) {
            this.getRandomGif(player, gif);
        }
    }

    addWin(player: IPlayer): void {
        player.wins++;
        const index = this.gifImages.indexOf(this.selectedGif);
        this.gifImages.splice(index, 1);

        if (this.gifImages.length > 0) {
            this.selectedGif = null;
        } else {
            // notify user we run out and handle restart
            this.selectedGif = null;
        }
        this.sortWins();
        this.dialog.closeAll();
        // jQuery('#modal').modal('hide');
    }

    addPlayer() {
        // possible form validation?
        if (this.newPlayer !== null && this.newPlayer !== undefined) {
            // TODO: set pass (5) in constructor
            const newEntry = new Player(this.players.length, this.newPlayer, 5, 0);
            this.players.push(newEntry);
            this.newPlayer = null;
            this.sortWins();
        }
    }

    sortWins() {
        this.players.sort((playerA: IPlayer, playerB: IPlayer) => playerB.wins - playerA.wins);
    }

    // oberserableTimer() {
    //     // debugger
    //     const source = timer(1000, 2000);

    //     const abc = source.subscribe(val => {
    //         console.log(val, '-');
    //         this.subscribeTimer = this.timeLeft - val;
    //     });
    // }
}


const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' }
];

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
