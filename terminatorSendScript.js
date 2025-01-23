async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
                      " T E R M I N A T O R "

                                by

                           James Cameron



A1      TITLE SEQUENCE - SLITSCAN EFFECT                       A1

1       EXT. SCHOOLYARD - NIGHT                                1

        Silence.  Gradually the sound of distant traffic becomes
        audible.  A LOW ANGLE bounded on one side by a chain-link
        fence and on the other by the one-story public school build-
        ings.  Spray-can hieroglyphics and distant streetlight sha-
        dows.  This is a Los Angeles public school in a blue collar
        neighborhood.

        ANGLE BETWEEN SCHOOL BUILDINGS, where a trash dumpster looms
        in a LOW ANGLE, part of the clutter behind the gymnasium.
        A CAT enters FRAME.  CAMERA DOLLIES FORWARD, prowling with
        him through the landscape of trash receptacles and shadows.

        CLOSE ON CAT, which freezes, alert, sensing something just
        beyond human perception.

        A sourceless wind rises, and with it a keening WHINE.
        Papers blow across the pavement.
        The cat YOWLS and hides under the dumpster.
        Windows rattle in their frames.
        The WHINE intensifies, accompanied now by a wash of frigid
        PURPLE LIGHT.  A CONCUSSION like a thunderclap right over-
        head blows in all the windows facing the yard.

        C.U. - CAT, its eyes are wide as the glare dies.


1A/FX   ANGLE - DUMPSTER                                       1A/FX

        ELECTRICAL DISCHARGES arc from the dumpster to a water
        faucet and climb a drain pipe like a Jacob's Ladder.

                                              CUT TO:


2       EXT. SCHOOLYARD - NIGHT                                2

        SLOW PAN as the sound of stray electrical CRACKLING subsides.
        FRAME comes to rest on the figure of a NAKED MAN kneeling,
        faced away, in the previously empty yard.
        He stands, slowly.
        The man is in his late thirties, tall and powerfully built,
        moving with graceful precision.

        C.U. - MAN, his facial features reiterate the power of his
        body and are dominated by the eyes, which are intense, blue
        and depthless.  His hair is military short.

        This man is the TERMINATOR.

        He glances down, taking calm inventory of himself, and
        notices that a fine white ash covers his skin.  He brushes
        at it unconcernedly as he walks toward the fence, scanning
        his surroundings.

                                              CUT TO:


2A/FX   CRANE SHOT - SCHOOLYARD/CITY - NIGHT                   2A/FX

        CAMERA MOVES UP as Terminator approaches the schoolyard fence
        beyond which is an embankment rolling down in darkness to the
        cityscape below.  The school is perched at the edge of a pro-
        montory offering a respectable view of the urban sprawl teem-
        ing and glistening under a sullen sky.  The night clouds are
        shot through with occasional flashes of LIGHTNING, presaging
        a thunderstorm.

        Terminator stands, hands on hips in prefect symmetry, gazing
        down at the city as the CAMERA REACHES FULL HEIGHT.

                                              CUT TO:


3       EXT. PLAYGROUND - NIGHT                               3

        A beer bottle SMASHES on the ground.  PULL BACK to include
        its ex-owner and his two compatriots, YOUTH GANG MEMBERS,
        lounging on the jungle gym of a deserted playground.  They
        sport nondescript PUNK REGALIA...torn T-shirts, fatigue
        pants, combat boots or high-top sneakers, leather jackets.

        The leader notices something and sits up.

                                LEADER
                           (pointing)
                     Hey, hey...what's wrong with
                     this picture?

        ANGLE - REVERSE, seen past the lounging toughs, Terminator
        walks naked into a pool of streetlight, striding purpose-
        fully toward them.

        ANGLE - OVER TERMINATOR'S SHOULDER, as he approaches them.
        They slide from their perches and drop easily to the ground
        liquid shadows.

                                LEADER
                     Nice night for a walk, eh?

        Terminator stops right in front of them.

                                TERMINATOR
                           (without inflec-
                           tion)
                      Nice night for a walk.

        They surround him, all swagger and malign good humor.

                                SECOND PUNK
                      Washday tomorrow, huh?  Nothing
                      clean, right?

        Terminator eyes them without expression, unhurried.
        Reptilian.

                                TERMINATOR
                      Nothing clean.  Right.

                                LEADER
                      This guy's a couple bricks
                      short.

        Terminator turn to the second punk, ignoring the
        others.

                                TERMINATOR
                      Your clothes.  Give them to me.

        The punks exchange glances, dismayed.

                                TERMINATOR
                           (coldly)
                      Now.

                                SECOND PUNK
                           (bracing)
                      Fuck you, asshole.


        Without warning Terminator hammer-punches him in the temple
        with blinding speed.  The blow flings him with a CLANG into
        the jungle gym.  He drops to the ground in a still heap,
        eyes open, twitching.

        The leader whips out his SWITCHBLADE and slashes in one
        motion.  Terminator ducks back and catches the knife-
        wielder's wrist in an inhuman grip.  Then he punches the
        leader with piledriver force just below the breastbone.

        ANGLE - PAVEMENT, as the knife clatters down.  The punk's
        combat boots are on tiptoe, barely touching the ground.

        ANGLE - TWO SHOT, Terminator and the leader are close
        together as if dancing, but motionless.  Their bodies are in
        total shadow.  The punk's eyes are wide, his veins distended
        with an agonizing pressure.  Terminator jerks his fist back
        with a WET SOUND and the other drops OUT OF FRAME.

        The last tough is stumbling away, gaping with terror.  He
        backs into a chainlink fence, turns to run along it, finds
        he is in a corner.

        Terminator takes a step toward him, his gaze ominous.

        The punk begins shakily stripping off his clothes.
        Thunder peals overhead.

                                               CUT TO:

4       EXT. STREET/NEARBY - NIGHT                             4

        A light RAIN begins to fall.
        Terminator emerges onto the street from the playground,
        pausing in the pool of light under a streetlight to hike
        the collar of the punk's jacket.
               The rain streams down over his face, running into
        and over his eyes.  They do not blink.

                                               CUT TO:

5       EXT. DOWNTOWN STREET/ALLEY - NIGHT                     5

        Another part of the city.  Seedy apartments and storefronts.
        The streets glisten, hissing with sporadic late night traffic.
        SLOW PAN AND DOLLY into the mouth of a narrow alley lined
        with trash containers and fire escapes.  From a recessed
        doorway, two filthy legs sprawl out onto the wet pavement.
        An angry, inarticulate DRUNKARD'S MONOLOGUE rises occasionally
        above the rain sounds.

        ANGLE - DOORWAY,  The derelict rouses from his bitter stupor
        as a brilliant purple glare lights up the wet brickwork
        around him.  A shockwave hurls trash into the air.
        Painted over windows shatter.
        Rat scurry, blinded.

        A FIGURE drops INTO FRAME as if out of the sky and smacks
        the pavement with a muddy splash.

        C.U. - DERELICT, as he blinks at the fading glare, amazed.

        A NAKED MAN, compact and muscular, rises in a defensive
        crouch.  KYLE REESE is 22, but his face has been aged by
        ordeal, the mouth hard, eyes grim.  A crinkled burn scar
        traverses one side of his face from chin to forehead.  Other
        scars, from burns and bullets, mar his hard-muscled body.

        The rain washes a fine coating of white ash from his skin
        as electrical ARCS lace back and forth between the fire
        escapes behind him, HISSING and SPUTTERING.  The sound
        fades, then stops altogether, to be replaced by a rising
        scream of animal agony.

        Reese lurches to his feet and sprints across the alley.

                                               CUT TO:

5A/FX   OMITTED                                                5A/FX

6       OMITTED                                                6


7       EXT. FIRE ESCAPE - NIGHT                               7

        CAMERA MOVES WITH REESE as he leaps to the fire escape and
        clambers up to the first landing to crouch beside another
        NAKED MAN who appears to be entangled in the ironwork.  The
        man is contorted with pain as his screams die to a shivering
        gasp.  CLOSER ANGLE reveals that he has been skewered through
        the abdomen by the horizontal iron slats and through the
        shoulder by a railing.  He has materialized in the same
        space occupied by the fire escape structure.  The figure
        slumps, motionless.

        Reese quickly checks for signs of life.  The man is dead.

        Reese descend to the alley floor and crosses to the drunk
        huddled in the doorway.

        A pair of flamboyantly dressed women, obviously working
        girls, passes by the alley mouth.  They do a double take
        when they see Reese, but walk on without breaking stride,
        completely jaded.  He's certainly not a potential customer.

        Reese crouches down as if to speak to the drunk.

                                DERELICT
                      Say, buddy...did you see a
                      real bright light?

                                               CUT TO:

8       EXT. ALLEY/SAME - NIGHT                                8

        A brilliant white glare stabs into the alley mouth as an
        LAPD cruiser glides slowly by on the street.  The search-
        light illuminates the figure of Reese, crouching over the
        sprawled drunk, just pulling on the other's trousers.

        The cruiser chirps to a stop.  The doors fly open and two
        cops leap out.

                                FIRST COP
                      Hold it, right there!

        Reese hitches his pants and bolt like a shot.  The cops
        draw their guns and race into the alley after him.

        HANDHELD CAMERA or PANAGLIDE, rushing with Reese along the
        narrow alley.  He vaults a pile of tumbled trashcans.
        Whips around a corner.  Leaps the hood of a parked car in
        the cross alley.

        PANAGLIDE PRECEDING COPS, as they snake through the night
        maze.

                                               CUT TO:

9       EXT. CROSS ALLEY - NIGHT                               9

        PANAGLIDE WITH REESE as he hits a chain link gate at a
        dead run and scrambles over it.

10      EXT. ALLEY JUNCTION - NIGHT                            10

        WHIP PAN ON COPS, skidding to a stop at the corner in time
        to see Reese vault the fence.  They separate.

        DOLLY WITH SECOND COP, as he runs to the gate.

                                               CUT TO:

11      EXT. ALLEY/NEARBY - NIGHT                              11

        LOW PANAGLIDE WITH REESE, running full tilt, displaying
        incredible agility.

        REESE'S POV, the alley walls blur by.  The view of a hot-
        wired rat in an urban maze.

        C.U. - REESE, CAMERA hugging him as he sprints and turns,
        alternately front-lit, side-lit and silhouetted as the
        electric glare of the city wheels about him.

        ANGLE - ALLEY MOUTH, Reese flashes though intermittent
        cross-lighting in the B.G.

        Another unit arrives out front and Reese melts back into
        the alley, only to see a cop round the corner behind him.
        Sandwiched.  Reese crashes into a steel door, rending the
        lock, and vanishes into the darkness within.

        The newly arrived cops are a K-9 unit.  They open the back
        door of the squad car to release a large black Doberman.

                                               CUT TO:


12      INT. DEPARTMENT STORE - NIGHT                          12

        Reese finds himself among the display racks of a discount
        department store.  A searchlight stabs in the front
        window as he dashes into the maze of aisles.

        Three cops enter behind him through the shattered door.

        FAST PANAGLIDE WITH REESE, as he crab-runs low among the
        moving shadows where flashlights quarter the darkness.  He
        bolts the open space behind a display window.  Sees the
        outside searchlight sweep toward him.  Freezes.

        ANGLE - REESE, his feral face frozen among the smooth-
        featured, smiling mannequins.  As the light passes, Reese
        silently moves on.

        ANGLE - COP, passing the end of a long aisle B.G. while in
        the F.G. a hand ENTERS FRAME, removing a knit shirt from a
        hanger.  Reese slips the shirt on quietly and does a fast
        crab-walk across the aisles to melt into the other racks
        and shadows, CAMERA MOVING LOW with him.

                                               CUT TO:


13      INT. DEPARTMENT STORE/AISLE - NIGHT                    13

        With a shocking GROWL the police dog hurtles out of the
        shadows, LEAPING RIGHT AT CAMERA.

        ANGLE - REESE AND DOG, a dark blur with teeth, extremely
        Doberman, flies toward Reese.  He spins.  Catches it by
        the throat in mid-air. Arcs it to the floor with unflinching
        precision.

        C.U. - DOBERMAN, suddenly on its back and held by the throat,
        THE DOG YELPS and stares at Reese, who leans very close.
        Inches from its eyes he fixes it with a gaze of uncompromis-
        ing dominance.  Some ancient communication seems to pass
        between the two.

        Reese releases the animal and turns his back on it, selecting
        a long overcoat from a rack.  The dog backs away from him,
        stiff-legged and confused.

                                               CUT TO:


14      INT. DEPARTMENT STORE - NIGHT                          14

        TRACKING WITH REESE as he rounds a corner on the run, still
        shrugging into his long coat.
        Running smack at him is another cop, gun aimed.

        Without slowing, Reese leaps toward him, twisting in mid-air
        like a cat.  The cop FIRES. Misses.  Goes down under Reese's
        tackle and they slide together on the polished floor.

        Before they even come to rest Reese snatches the cop's gun,
        aiming it at the other's face two-handed.

                                REESE
                      What day is it?  The date...

                                COP
                      Thursday...uh...May twelfth.

                                REESE
                           (viciously)
                      What year?

        A SHOT whines off the metal side of an escalator behind
        Reese's head.  He vaults the escalator rail, leaving the
        amazed cop lying on the floor.

        Reese bounds up the frozen steps, pocketing the .38 Police
        Special in his coat.

        Cops dash through the maze of aisles, converging at the
        escalators.

                                               CUT TO:

15      INT. DEPARTMENT STORE/SECOND FLOOR - NIGHT             15

        WHIP PANNING WITH REESE, as he hurtles between displays.
        He stops for a moment beside a rack of shoes.  Slaps one of
        a pair of tennis shoes sole-to-sole against his bare foot.
        Too small.  Another.  Holding the shoes he runs on.

                                               CUT TO:

16      EXT. SECOND FLOOR FIRE ESCAPE LANDING - NIGHT          16

        A door opens quietly and Reese slips out.

        CAMERA TRACKS WITH HIM as he moves like a panther along the
        narrow catwalk.  TILT DOWN to include the first LAPD cruiser
        parked at the mouth of the alley.

                                               CUT TO:

17      EXT. ALLEY/STREET - NIGHT                              17

        Reese drops cat-like beside the unattended police car.
        Cautiously, he opens the door of the cruiser, removes the
        RIOT GUN, an Ithaca pump model, from the dash rack and slips
        it under his coat.  Cradled in a vertical position, the
        shortened weapon is virtually invisible.

        He walks out onto the street and away,  unhurriedly, an
        innocuous pedestrian soon lost in the rain.

                                               CUT TO:


18      EXT. STREET/NEARBY - NIGHT                             18

        Reese enters a telephone booth.  Harsh light rakes across
        his face, outlining the long scar.  He opens the directory,
        leafs through it.

        ANGLE - MACRO ON PAGE, Reese's finger slides down a column.
        Stops beside the following listings in the big metropolitan
        white pages:
        CONNOR, SARAH
        CONNOR, SARAH ANN
        CONNOR, SARAH J.

                                               DISSOLVE TO:


19      EXT. CITY STREET - MORNING                             19

        The night's rain has given way to a typical L.A. morning
        of diffuse sunlight.

        MOVING WITH A GIRL on a MOPED as she zips through traffic.
        SARAH CONNER is 19, small and delicate-featured.  Pretty in
        a flawed, accessible way. She doesn't stop the party when
        she walks in, but you'd like to get to know her.  Her vulner-
        able quality masks a strength even she doesn't know exists.

        Sarah maneuvers nimbly, apparently in a hurry.

                                               CUT TO:


20      EXT. BIG BOB'S RESTRAUNT - DAY                         20

        Sarah buzzes into the parking lot of Big Bob's Family
        Restaurant and chains the moped to the icon of Big Bob
        himself.  The fiberglass cherub holds up his mammoth
        hamburger in perpetual homage to whatever deity watches
        out for fat kids.
        Sarah removes a stack of college textbooks from the luggage
        carrier and tuns to go into the restaurant.

                                SARAH
                           (to Big Bob)
                      Watch this for me, big buns.

                                               CUT TO:

21      INT. BIG BOB'S/DINING AREA                             21

        HIGH WIDE SHOT prominently featuring a VIDEO SURVEILLANCE
        CAMERA F.G. as Sarah enters below.  She passes under another
        video eye as she crosses the main floor of the wholesomely
        appointed eatery.  Sarah goes through the swinging STAFF
        doors under a third camera.

                                                CUT TO:


22      INT. MANAGER'S OFFICE                                  22

        The office is closet-like, lit by the glow of several
        security monitors.  CHUCK BREEN, day manager, pimply and
        officious,watches Sarah in an overhead view of the service
        corridor.  He punches a switch and reaches for a microphone
        on a studio gooseneck.

                                               CUT TO:

23      INT. SERVICE CORRIDOR                                  23

        Sarah glances up as Breen's voice rasps from a ceiling speaker.

                                BREEN (V.O.)
                      Sarah?

        She answers the empty hallway.

                                SARAH
                      Yes, Chuck?

                                BREEN
                      Come to the office, please.

        She turns back toward the office door at the end of the
        corridor.

                                               CUT TO:


24      MANAGER'S OFFICE                                       24

        Sarah opens the door to Breen's closet control center.

                                SARAH
                      Mission control to Chuck,
                      come in...

                                BREEN
                           (without looking
                           up)
                      You're late.

        Sarah is undaunted.

                                SARAH
                      Aren't I worth waiting for?

                                BREEN
                      Not really.  Do you think you
                      can get here on time if I put
                      you on the floor as a waitress?

                                SARAH
                           (grinning)
                      I don't know.  I kinda had
                      my heart set on being a
                      cashier the rest of my life.

                                BREEN
                      The pay's the same but you'll
                      make more in tips.

                                SARAH
                      Thanks, Chuck.  I need the

                      money.  Can I still work the
                      hours around my classes?

        Breen turns to punch up a display on the restaurant's
        small accounting computer.  Sarah looks over his shoulder
        as he modifies the week's schedule.

                                BREEN
                      Mmm.  Same schedule's okay.

                                SARAH
                      Alright!

                                BREEN
                           (gravely)
                      Can you handle it?

                                SARAH
                      It's not brain surgery,
                      Chuck.

        Breen hands her an apron ceremoniously.

                                BREEN
                      Here you go.  You're a
                      Bob's Girl now.  Nancy
                      will check you out.

                                SARAH
                      I won't let the fat kid down.

                                               CUT TO:

25      OMITTED                                                25


26      INT. LOCKER ROOM - DAY                                 26

        ANGLE - TIGHT ON LOCKER DOOR as it slams shut, revealing
        Sarah transformed into a "Bob's Girl".
        Her hair is in a bun.
        White blouse.  Short flared skirt and apron with a bow.
        She resembles a suburbanized peasant maid looking for a
        goat to milk.

        Sarah confronts her reflection in the mirror, pondering
        its absurdity.
        She pinches her sheeks.
        Smiles vacuously.

                                SARAH
                      Hi, I'm Sarah and I'll be
                      you waitress.
                          (pause)
                      I'm so wholesome, I could
                      puke.

                                               CUT TO:


27      EXT. PARKING LOT - DAY                                 27

        TIGHT ON CAR SIDE WINDOW, as a figure approaches, reflected
        in the glass.  A fist punches through the window, shattering
        it.  The thief unlocks the door and gets behind the wheel.
        It's Terminator.

                                               CUT TO:


28      INT. YELLOW MAVERICK - DAY                             28

        With a blow from the heel of his hand Terminator smashes loose
        the ignition assembly and strips the wires with a brutal
        twist of his fingers.  Touching the proper wires he starts
        the car.

                                               CUT TO:


28A     EXT. PAWN SHOP - DAY                                   28A

        Terminator walks past the long display window of an
        enormous pawnshop emporium.  Signs declare, among other
        things, GUNS and AMMO is red block letters.
        Terminator passes the appliance section, and the pictures
        on a row of TV sets distort and break-up sequentially as
        he walks by, returning to normal behind him.

        He enters the store.

                                               CUT TO:


29      INT. PAWN SHOP - DAY                                   29

        TIGHT ON GLASS COUNTERTOP as an AR-180 ASSAULT RIFLE WITH
        SCOPE is laid beside a number of other guns: a COLT K-
        MODEL .45 ACP, a SMITH AND WESSON .38 FOUR-INCH, a BERETTA
        .225 ACP.

                                TERMINATOR (V.O.)
                      ...the Remington 1100 Autoloader...

        WIDE as the CLERK, who looks like a sick lizard, pallid
        and paunchy, takes the rifle from a wall rack.  He lays it
        beside the arsenal of perfectly legal anti-human artillery
        already on the glass counter.
        Terminator scans expressionlessly for additional selec-
        tions.

                                CLERK
                      Anything else?

                                TERMINATOR
                      A phased plasma pulse-laser in
                      the forty watt range...

                                CLERK
                           (annoyed)
                      Just what you see, pal.

        He indicates the display case and wall racks with a
        minimal gesture.

                                TERMINATOR
                      The Uzi 9 millimeter.

                                CLERK
                           (setting  it out)
                      You know your weapons, buddy.

        Terminator examines each in turn, working the actions with
        curt, precise movements.

                                CLERK
                           (continuing)
                      Any one of them's ideal for
                      home defense. Which'll it be?

                                TERMINATOR
                      All.

        The clerk digs deep and finds a scrap of a smile.

                                CLERK
                      Maybe I'll close early.
                      Cash or charge?

        Instead of replying, Terminator takes a box of shotgun shells
        from a stack on the display case.

                                CLERK
                      Sorry, I can't sell the ammo
                      with the guns.  You'll have
                      to---Hey!

        Terminator has calmly begun feeding the shells into the
        shotgun.

                                CLERK
                           (continuing)
                      You can't to that...

                                TERMINATOR
                           (evenly)
                      Wrong.

        He raises the barrel and pulls the trigger.  The gun THUNDERS.

                                               CUT TO:


30      EXT. GAS STATION/PHONE BOOTH - DAY                     30

        The yellow Maverick pulls to a stop beside a single phone
        booth.

        MOVING WITH TERMINATOR, as he gets out, walks to the booth
        and rapidly pulls its occupant out by his greasy T-shirt,
        flinging him backward into the parking lot.  The guy is
        bear-like, slab-handed, but Terminator doesn't even glance
        back as he steps in to take the man's place.

                                MAN
                           (outraged)
                      Hey, man...

                                               CUT TO:

31      PHONE BOOTH

        A woman's voice, a faint reedy monologue, issues from the
        dangling receiver.
        Terminator leafs rapidly through the directory.

        ANGLE - C.U. PAGES FLIPPING

        ANGLE - MACRO SHOT, as Terminator's finger comes to rest
        beside a now-familiar listing:
        CONNOR, SARAH

                                               CUT TO:


32      INT. BIG BOB'S/DINING AREA

        Sarah is bustling about, trying to service the start of
        the dinner rush.  In waitress parlance, she's 'in it'.
        She runs the gauntlet between tables, precariously balancing
        two full dinner plates on one arm and hand-carrying a
        third.  A customer tugs on her apron for attention and she
        barely averts contributing the chili size to his wardrobe.

                                CUSTOMER
                      Honey, can I get that coffee
                      now?

                                SARAH
                      Yes sir, just a second.

        She reaches her table after near collisions with a Mexican
        busboy and two teenage girls doing cheerleading routines
        in lock-step.

                                SARAH
                      Who gets the Burly Burger?

                                CUSTOMER TWO
                      I ordered Barbecue Beef.

                                CUSTOMER THREE
                      Does mine come with fires?

                                CUSTOMER FOUR
                      He's got the Barbecue Beef,
                      I've got a Chili-Beef Deluxe.

                                SARAH
                      Okay, who gets the Burly Beef?

                                CUSTOMER AT NEXT TABLE
                      Miss, we're ready to order.


        In the process of setting down all the plates Sarah knocks
        over someone's water glass.

                                SARAH
                           (mopping fran-
                           tically)
                      Oh, sorry.  That's not real
                      leather, is it?

        As she cleans up the spill, a kid at the next booth reaches
        over and dumps a scoop of ice cream into the top pouch of
        Sarah's apron

        She stares down at the mess melting over her hard-earned
        and sags with defeat.  NANCY, a plump, gum-chewing waitress,
        stops beside her to whisper.

                                NANCY
                      Look at it this way: in a
                      hundred years, who's gonna
                      care?

                                               CUT TO:

33      EXT. SUBURBAN STREET - DAY

        ANGLE on a standard-issue L.A. suburban street with kids
        racing Big Wheels B.G.

        LOW ANGLE with the FRAME comprising a single house, toy-
        littered lawn and mailbox.  EXTREME F.G., by the curb, is
        a CHILD'S PLASTIC TRUCK.

        There is the sound of a CAR ENGINE approaching, and the
        front of the yellow Maverick appears, stopping at the curb.
        Its front tire  CRUSHES the toy.

        PANAGLIDE ON TERMINATOR, preceding him as he steps out of the
        car, pauses by the mailbox to check the name, and strides
        toward the house.

        A YOUNG BOY, playing in the driveway, watches him pass.  The
        boy's DOG, a small Terrier, growls low and mean, crouching
        back from Terminator.

        He rings the doorbell and waits, motionless.
        The door opens a few inches, held by a security chain,
        revealing a frail MIDDLE-AGED WOMAN in apron and rubber
        cleaning gloves.

                                TERMINATOR
                      Sarah Connor?

                                WOMAN
                      No, she's upstairs.  Who
                      shall I say is--

        Terminator breaks the chain and pushes past her as if she
        didn't exist.

                                               CUT TO:


33A     INT. HOUSE/FOYER                                       33A

        PANAGLIDE ON TERMINATOR, preceding his as he crosses the
        foyer and mounts the stairs.  The woman starts after him.

                                WOMAN
                      What do you think you're--
                      My God!

        She gasps and stops in her tracks as Terminator smoothly
        pulls the .45 from under his jacket and snaps the cocking
        slide.

                                WOMAN
                           (screeching)
                      Oh my God...Sarah!

                                               CUT TO:

33B     INT. BEDROOM                                           33B

        Installed on her bed for an afternoon of 'soaps' is the
        WRONG SARAH CONNOR.  ELECTRODE PADS exercise her doughy
        thighs as the 35 year old divorcee watches "GENERAL HOSPITAL".
        She calls out distractedly:

                                WRONG SARAH CONNOR
                      What is it, Mom?

        She jumps as the door BANGS open.  And stares in dumb
        amazement as the good-looking, intense-eyed man in the
        strange clothes raises a pistol.

        And aims it at her face.

        It all seems less real than "GENERAL HOSPITAL" in that
        half-second before he FIRES.

                                               CUT TO:

33C     INT. FOYER                                             33C

        The mother is fumbling with a telephone when she hears
        the SHOT.  The silence stretches for several BEATS.  Then
        FIVE MORE SHOTS are heard.
        The woman screams and drops the phone as she stares upward.

        ANGLE ON CEILING above her.  With each successive shot a
        chuck of plaster explodes off the ceiling.

                                               CUT TO:

33D     INT. BEDROOM                                            33D

        LOW ANGLE ON TERMINATOR, standing with the .45 aimed
        down at the dead woman, just OUT OF FRAME on the floor.
        He unhurriedly removes the spent clip, reloads the weapon
        and replaces it under his jacket.

        Crouching down, he turns the woman's body over, confirming
        that she is dead.

                                               CUT TO:

33E     INT. FOYER                                             33E

        The mother is frantically dialing the phone.  She mis-
        dials, starts over.  Then stops as she hears the bedroom
        door open.

        Terminator stands at the head of the stairs.
        His hand is bloody where he grasped the dead woman's
        shoulder.

        He starts down the stairs.
        The mother stands paralyzed, unable to breathe.
        He reaches the main floor and walks toward her.
        She edges into a corner, eyes wide.
        He reaches out.

        And wipes his hands clean on her apron.

        Terminator walks out, without expression, leaving the
        woman to sag to the floor in a faint.

                                               CUT TO:


34      INT./EXT. SERVICE TUNNEL - DAY                         34

        TIGHT ON KYLE REESE'S HANDS as they make the last few
        strokes with a hacksaw to sever the wooden stock from
        the riot gun.  It clatters to the ground, leaving a short
        stump, like a pistol grip.

        CUT WIDER as Reese hefts the weapon.  He is crouched in
        an underground service tunnel below a busy street.  Shadows
        of people walking across a grating in the sidewalk above
        him flicker past.  They can't see him in the darkness below
        their feet as he checks the gun's action carefully.  He
        slips it under his overcoat where it hangs from a jerry-
        rigged sling.

                                               CUT TO:


35      EXT. STREET - DAY                                      35

        Reese emerges from a stairwell behind a service station,
        his overcoat done up to the top button.
        He walks through the sparse morning crowd on the cluttered,
        overbuilt commercial street.
        He is out of sync.
        A stranger in a strange land.
        He holds himself tightly reined, cautious and feral as he
        moves among the unconcerned pedestrians.
        His eyes flick rapidly about.
        He is seeing this Babylon for the first time.

        Reese stops at a hole-in-the-wall take-out stand.  He
        watches people walk away with food.  Moves closer.
        Scrutinizes the next man as he orders.

                                TAKE-OUT CUSTOMER
                      Gimme a falafel with yogurt
                      dressing and, uh, Baco-bits.

        The counterman hands him his food and change wordlessly
        as Reese steps up.

                                REESE
                      Gimme a falafel with, uh,
                      yogurt and Baco-bits.

        The counterman barely looks up as he passes the mess
        through the window.

                                COUNTERMAN
                      That'll be one-sixty.

        He glances up and Reese is gone.  He leans half out the
        window.

                                COUNTERMAN
                           (continuing)
                      Hey!  Son-of-a-bitch.

                                               CUT TO:

35      EXT. ALLEY - DAY                                       35

        Reese crouches in an alley, out of sight of passersby,
        wolfing his food.  The sauce runs down his sleeve but he
        doesn't notice.

                                               CUT TO:


35A     INT. BIG BOB'S/DINING AREA - DAY                       35A

        An old man with a shrunken, ungenerous face scowls at
        the menu as Sarah wipes the tabletop in front of him.

                                SARAH
                      I haven't seen you in here
                      lately, Mr. Miller.

                                MR. MILLER
                      What's it to ya?

                                SARAH
                      You must have a girlfriend.

                                MR. MILLER
                      That's none of your business.

                                SARAH
                      Aha!  Is she young?

        Mr. Miller lowers his menu and glares at her.

                                MR. MILLER
                      Compared to me she is.  How

                      come you're not at the cash
                      anymore?  They catch ya steal-
                      ing?

                                SARAH
                           (smiling)
                      What's it to ya?

        When she leaves, the old man is grinning, behind the menu,
        where no one can see him.

                                               CUT TO:

36      INT. BIG BOB'S/SERVICE CORRIDOR                        36

        Sarah rounds the corner, walking fast as she undoes her
        apron.  She calls out to the walls without looking up.

                                SARAH
                      I'm on break, Chuck.  Carla's
                      got my station.

        As she approaches the locker room where the girls take
        their coffee breaks, the door bursts open and Nancy
        beckons to Sarah.

                                NANCY
                           (excitedly)
                      Hurry up.  It's about you...
                      I mean sort of...Come on!

                                               CUT TO:


37      INT. BIG BOB'S/BREAK ROOM                              37

        Nancy guides Sarah to the small black and white portable
        TV in the corner.  Two other girls, smoking cigarettes
        with their shoes off and nyloned feet on the table, are
        already watching.  One glances at Sarah.

                                WAITRESS
                      Hey, Sarah.  This is weird.

        They huddle around the set, intent on a newscast in progress.

                                TV ANCHORWOMAN
                      ...and a police spokesman at
                      the scene refused to speculate
                      on a motive for the execution-
                      style slaying of the Encino
                      housewife.  He did however say
                      that an accurate description of
                      the suspect has been compiled
                      from several witnesses.  Once
                      again, Sarah Connor, thirty-five,
                      mother of two, brutally shot to
                      death in her home this afternoon.

        As the news grinds on, Sarah gazes unseeingly at the screen.
        Nancy claps her on the shoulder, laughing.

                                NANCY
                      You're dead, honey.

                                               CUT TO:


38      EXT. HEALTH CLUB - DUSK                                38

        Sunlight is dying when Sarah swings her moped to the curb
        in front of the 'GOOD LIFE SPA', a large, crowded health
        club.

                                               CUT TO:


39      INT. HEALTH CLUB/AEROBICS STUDIO                       39

        MUSIC BOOMS and masses of leotarded cellulite sway in close
        F.G. as CAMERA DOLLIES along a row of panting, stretching
        women.  In deep B.G. Sarah slips in through the door and
        waits against the wall while the human dynamo, GINGER VENTURA,
        leads the class energetically.  Ginger, Sarah's roommate,
        is a party-stopper.  Red-haired, athletic, sensuous.  She's
        pretty enough when still, but stunning in motion.  And she's
        in motion.

        Ginger yells commands and cheerfully dives into contortions
        to the BEAT of a MOTOWN FAVORITE.
        MARCO, a handsome, well-defined guy wearing a tight STAFF
        T-shirt, strolls up for a drink at the water fountain next
        to Sarah.

                                MARCO
                      Hi. I've seen you around.
                      You're cute.  Cute I remember.

                                SARAH
                      I'm Sarah.  Ginger's roommate.

                                MARCO
                      Yeah, right.  I'm Marco.

        The dance tape ends.

                                GINGER
                      ...and three aaand four!  And
                      that's it ladies!  Now, didn't
                      that feel good?

        The group collapses ensemble.  A chorus of groans.

                                GINGER
                      Let's think positive or next
                      time I'll play the FM version.

        Ginger walks over to Sarah as the class disperses.  Marco
        is leaning on the wall next to Sarah, who is enjoying the
        attention.

                                SARAH
                      ...yeah, really?  Say some-
                      thing in Italian.

        Before Marco can reply, Ginger pulls the front of his gym
        shorts out and peers down.  She shakes her head.

                                GINGER
                      You're wasting your time, kiddo.
                      Let's go.

        She grabs Sarah by the arm and pulls her out the door.
        Sarah catches a glimpse of Marco's expression over her
        shoulder as the door closes.

                                               CUT TO:

40      INT. HEALTH CLUB/STAIRS AND CORRIDOR                   40

        PANAGLIDE WITH THE TWO GIRLS, as they descend to the first
        floor and enter a hallway
        Sarah is gasping with laughter.

                                SARAH
                           (weakly)
                      I don't believe you did that.

        Ginger is adjusting her ever-present WALKMAN-TYPE CASSETTE
        PLAYER at her hip.  She slips on the earphones as they walk
        along.
        Sarah feigns outrage.

                                SARAH
                           (continuing)
                      I had him hooked.  He was
                      just about to ask me out.
                      I could tell.

                                GINGER
                      That guy's a jerk.  I did
                      you a favor.

                                SARAH
                      I'll do the same for you
                      sometime.

        Sarah laughs and claps her friend on the back.  They turn
        in at a door marked WEIGHT ROOM.

                                               CUT TO:

41      INT. WEIGHT ROOM                                       41

        SEVERAL ANGLES, on glistening arms, legs, torsos merging
        into bio-mechanical kinetic sculptures with the chrome-steel
        levers and tubes.  The CRASH and SQUEAL of metal against
        metal.

        In F.G., two Conan-esque arms thrust upward, glistening.
        Ginger's boyfriend, MATT McCALLISTER, the assistant manager
        of the club, strains out his last reps, bench-pressing
        enormous weight on the Nautilus machine.
        Despite his imposing appearance, Matt is one of the warmest
        people you'd ever want to meet.
        His face is contorted, muscles knotted for the last push.
        He heaves it up with a guttural cry.
        Lowering his weights with a CLANG, Matt lies panting, arms
        dangling at his side, eyes closed.
        A pair of female legs appear.

                                GINGER (V.O.)
                           What's this? Sleep therapy?

        Matt opens his eyes.

                                GINGER
                           (continuing)
                      You think somebody's gonna
                      do this for you?  Look at
                      those shriveled bi's.  And
                      you haven't worked lat's or
                      ab's since Wednesday.

                                MATT
                           (smiling)
                      Hello, sweetheart.  Had a
                      rough day?

                                GINGER
                           (softening)
                      Come here, wimp.

        She leans down as he sits up and they meet in a kiss that's
        bad for the other guys' discipline.

        Sarah waits until they break the clinch to speak.

                                SARAH
                      Hi, Matt.

        Matt look backwards over the bench, and replies, upside-down.

                                MATT
                           (grinning broadly)
                      Heeey!  It's my favorite
                      Sarah.  Hi, babe.

        Ginger pulls the pin on Mat's weights and re-inserts it
        beneath the entire stack, the maximum weight.

                                GINGER
                      Alright, warm-ups are over.
                      Back to work, Bunky.

        Ginger readadjusts her headphones as the two girls walk away.

                                MATT
                      'Bye beautiful.  You too,
                      Ginger.

        Two weightlifters nearby look at each other, than at Matt.

                                WEIGHTLIFTER
                      Bunky?

                                               CUT TO:

42      EXT. HEALTH CLUB/STREETS - DUSK                        42

        Sarah lurches away from the curb on her moped, almost
        spilling Ginger who is attempting to ride double.  They
        swing out onto a main thoroughfare and careen through
        the bumper-to-bumper traffic.
        Sarah maneuvers deftly though overloaded and unstable.
        Ginger doesn't know whether to laugh of scream at the
        near-misses.
        She does both.

                                               CUT TO:


43      OMITTED                                                43


44      EXT. STREET/CONSTRUCTION SIGHT - DUSK

        On a side street the girls pass an excavation site  between
        high-rises.  They pass OUT OF FRAME as CAMERA HOLDS on the
        construction area and Ginger's shrieks fade.

        In the F.G., under an overpass, Reese sits is a car watching
        the powerful machines moving earth.
        He's in a late-model non-descript GREY SEDAN, one of a row
        of cars gathering dirt beside the construction site.
        Crab-armed back-hoes and massive caterpillars ROAR through
        a curtain of dust, under intense floodlights.  A power-shovel
        moves its great arm, lighting its own way with an arc-light.

                                               CUT TO:


45      INT. GREY SEDAN                                        45

        Reese sits motionless in the dark.  Waiting.  The clock in
        the dash ticks quietly.
        He flips on the radio.  A fatuous POP ROCK STATION.
        Reese fishes a magazine off the dirty floor.  His over-
        coat is off, draped over the shotgun on the seat beside
        him.
        His bare arms are sinewy and scarred.

        Reese flips the page of COSMOPOLITAN.
        He look at the glossy photos, the glossy women.
        Fantasy women.  Svelte and seamless.
        The ads fascinate him too: Caribbean vacations and blended
        whiskeys.
        His head sags against the door.
        He gazes dully at the tracks of a passing CATERPILLAR as they
        chew through the dirt.
        The ROAD and CLATTER of treads intensifies as his eyes close.

                                               CUT TO:


46      EXT. MELTED RUINS - NIGHT                              46

        TIGHT ON A GLEAMING STEEL TREAD as it grinds through debris.
        The debris is ferroconcrete, girders, and jackstraw heaps of
        HUMAN BONES, burned black.

        There is the sound of EXPLOSIONS, distant, and an intermittent
        electronic WHINE.  Incredibly bright searchlights play over
        the ground.  PANNING with the moving treads through twisted
        wreckage, F.G.
        The screen WHITES OUT with a BLAST, very close.  As the
        debris clatters down, a helmetted head snaps up into FRAME,
        EXTREME F.G.

        The visor of the HIGH-TECH HELMET is shattered, presumably
        by the explosion.  The wearer rips it off, revealing a
        younger Reese, minus his burn scar.
        His face is bathed in sweat, lit by the glow from a CRT
        SCOPE-SIGHT on a strange-looking rifle.
        The sound of SCREAMS and HOARSE SHOUTS not far off, and a
        continuous low murmuring of RADIO CHATTER, grid coordinates,
        casualties, unit placements, medic requests.

        Reese looks over his shoulder at his teammate, a GIRL
        of about sixteen, gaunt, dirty, heavily armed like himself.
        DOLLYING as they start to belly crawl through the bones
        and wreckage.
        Reese looks up.
        Through spires of a collapsed building a terrifying
        SPHINX-LIKE SHAPE moves against the sky...obscured by dust
        and blinding sweeps of its searchlights.
        Though we see little, this is an H-K,Hunter-Killer
        mobile ground-unit.

        Reese crawls, pacing the H-K, under and through, on elbows
        and knees, past mounds of charred skulls.  They
        pass the BODY OF A CHILD, a boy of about 10, center-
        punched with a smoking hole.  The boy clutches a rifle.
        More bodies.  Some in rags, some in uniforms like theirs.
        WOMEN. OLD MEN. CHILDREN.  They're all dirty and gaunt,
        scabrous.  And still bleeding.  Reese scrabbles past a
        dark rat-hole and there are human rats in it.  Some of them
        are sobbing, or screaming.

        Another EXPLOSION.
        The GLARE lights the huddled few.
        Human vermin with mud-caked weapons that haven't been
        invented yet.  Soldiers in a nightmare war.

        Reese and his teammate stop behind a blasted wall, having
        outflanked the massive H-K.  Its flashing blue lights flick
        across the walls, its searchlights sear through the
        debris.

        WIDER, showing the H-K more clearly...a blast-scarred
        CHROME LEVIATHON, with hydraulic arms folded mantis-like
        against its 'torso', and huge underslung GUN TURRETS.

        Reese leaps up and straight-arms a satchel-charge into its
        path.  One tread rolls over the explosive.
        Guns and searchlights swivel.  The head turns ponderously.
        Reese's partner rises, poised to throw hers.
        A POWER-BOLT catches her at the top of her arc, BLOWING
        HER INTO RED MIST.

        Reese is knocked down by the concussion.  Gets up, running,
        as the charges blow.
        The H-K's tread carriers are RIPPED APART.
        It lurches to a stop, burning.

        The following SEQUENCE is extremely FORESHORTENED.
        CUT FAST.  IMPRESSIONS ONLY.
        Running.
        Explosions light the ruins like flashbulbs.
        ENERGY WEAPONS criss-cross the night like tracers.
        LOW ANGLE, up past the burning H-K as its flying counter-
        part, an AERIAL H-K, arcs into view with a TURBOJET WHINE.

        Reese hauls two survivors of his unit into a PERSONNEL
        CARRIER, a CHEVY CAMARO with steel plate welded over it and
        the roof cut away to access the 50 CALIBER MACHINE GUN.
        It's stripped and rusted and bullet-riddled, glassless.
        The TIRES are OFF-ROAD and very gnarly.

        They're driving through the ruins, up and over and through.
        Reese drives like a demon.  Under other circumstances it
        would be considered insane.  Here it is merely very good.

        The machine gun CHATTERS.
        A BLACK SHAPE descends, a demon with searchlights.
        A BOLT OF LIGHT.

        Reese's car flips like a kicked beer can, rolling and
        crumpling.  He's pinned in the wreck, bloody, screaming
        despite his training.  The only other survivor, an
        emaciated BOY of twelve, is pulling for all he's worth
        to drag Reese out before it burns.

                                               CUT TO:


47      EXT. STREET/GREY SEDAN - NIGHT                         47

        CLOSE ON A BOY, about twelve, clean and healthy, wearing
        a blue plastic DODGERS HELMET.  He reaches through the
        window of the sedan.

                                BOY
                      Hey, mister...?

                                               CUT TO:


48      INT. GREY SEDAN                                        48

        Reese's eyes open in a split-second, and suddenly there
        is a SHOTGUN MUZZLE AIMED RIGHT AT US.
        Reese quivers with a curious spasm, similar to the tremors
        of his arrival, and blinks at the boy.

        The boy is white-faced, staring down the bore.  He backs
        away.  We see that he is straddling a bicycle.

                                               CUT TO:


49      EXT. GREY SEDAN - NIGHT                                49

        The boy's SISTER, slightly younger and also on a bicycle,
        can't see the shotgun from where she's waiting.

                                SISTER
                           (taunting)
                      See, I told you he wasn't
                      dead.  You owe me Baskin
                      Robbins.

        The boy rides past her list a shot.

                                BOY
                           (urgently)
                      Come on.  Just come on.

                                               CUT TO:


50      INT. GREY SEDAN                                        50

        Reese relaxes slowly, the voltage draining out of him.

        INSERT - MACRO, Reese's finger on the trigger is white
        with pressure.  He slips the safety to the OFF position.
        The gun can now be fired.

        He sets it on the seat and reaches for the dangling ignition
        wires, starting the car.

                                               CUT TO:


51      EXT. STREET/OVERPASS - NIGHT                           51

        Lit by streetlights, the car moves away with it lights
        off and vanishes in the shadows.

                                               CUT TO:


52      OMITTED                                                52

53      INT. SARAH'S APARTMENT/BATHROOM/LIVING ROOM - NIGHT    53

        Sarah and Ginger are crammed into the tiny bathroom,
        becoming inextricably tangled in each other's cords as
        they blow-dry, curl hair, and apply make-up.  Ginger
        has her headphones inverted under her chin but in place,
        and is bouncing to music as she dries her hair.  She is
        wearing a short terry-cloth bathrobe that reveals the
        greater part of her legs.  Sarah is in a skirt and bra.

        The phone rings and Sarah goes out into the living room
        to get it.

                                SARAH
                           (answering the
                           phone)
                      Hello?

                                VOICE (V.O.)
                           (on phone, deep
                           and breathy)
                      First I'm going to rip the
                      buttons off your blouse, one
                      by one...then run my tongue
                      along your neck, down to your
                      bare, gleaming breasts...

        Sarah cups her hand over the mouthpiece and calls out
        matter-of-factly:

                                SARAH
                      Ginger!  It's Matt.

        She resumes listening.

                                MATT (V.O.)
                      ...and then slowly pull your
                      jeans off inch by inch and
                      lick your belly in circles,
                      further and further down...
                      then I'll pull off your panties
                      with my teeth...

        Sarah is repressing laughter.

                                SARAH
                           (crossly)
                      Who is this?

        Silence.  Then Matt realizes to his horror who he's been
        talking to.

                                MATT (V.O.)
                      Oh my God!  Sarah!  Oh, shit.
                      Jesus, I'm sorry.  I thought
                      you were...Can I talk to Ginger?

                                SARAH
                      Sure, Bunky.

        As Ginger approaches, Sarah hands her the receiver and
        goes into the bedroom.

                                GINGER
                      Hello?

                                MATT (V.O.)
                      First I'm gonna rip the buttons
                      off your blouse...

                                               CUT TO:


54      BEDROOM

        Sarah picks up four blouses on hanger lying on the bed
        and goes back into the hallway.

                                               CUT TO:


55      INT. LIVING ROOM

        Ginger is still listening to Matt, nodding, as Sarah enters
        and starts holding the blouses against herself one by one
        for Ginger's inspection.

                                SARAH
                      What do you think?

                                GINGER
                           (covering mouth-
                           piece)
                      Great.

        Sarah hold up another one.

                                SARAH
                      How about this?

                                GINGER
                      Great.

                                SARAH
                      You're a big help.

                                GINGER
                           (advisory tone)
                      Alright, the beige one.

                                SARAH
                      I hate the beige one.

                                GINGER
                           (same advisory
                           tone)
                      Don't wear the beige one.

        Sarah gathers up the blouses and walks out.

                                SARAH (V.O.)
                      This guy's probably a schmuck
                      and I don't care what I wear.

        A couple of BEATS, and she's back in the doorway with
        a concerned expression.

                                SARAH
                           (continuing)
                      You think the beige?

                                               CUT TO:


56      EXT. VENICE STREET - NIGHT

        An unmarked car with a clamp-on light and siren blaring
        screeches to the curb behind two marked black-and-whites
        in front of a funky Venice apartment building.  A small
        crowd  is gathered around the front steps.  LIEUTENANT
        ED VUKOVICH, Homicide Division, gets out of the car and
        strides through the crowd.  He's fiftyish, short, but
        square and solid, a human bulldog gone a little to paunch.
        He chews Juicy Fruit gum like a maniac: a chain-chewer.
        He's homely as an old boot.  And he's not a smart cop, he's
        a wise one; rarer still.  The onlookers, gathered patiently
        for their ten second glimpse of something under a sheet,
        separate for him to pass.

                                               CUT TO:


57      INT. VENICE APARTMENT BUILDING/STAIRWELL/APARTMENT

        CAMERA PANAGLIDES AHEAD OF VUKOVICH, as he climbs the switch-
        back staircase two steps at a time.  He passes TWO UNIFORMED
        COPS at the doorway of a second-floor apartment, and enters
        to find a quiet flurry of activity.  Several DETECTIVES and
        a PHOTOGRAPHER prowl around, taking evidence, taking pictures.

        In the center of the living room floor is the body of a
        young woman, crumpled face down in a small lake of blood.
        Two bags of groceries lie split open on the floor in front
        of her.

        Vukovich glances up as he is joined by DETECTIVE SGT.
        TRAXLER.  Traxler is black, lean and very jaded.

                                VUKOVICH
                      Give me the short version.

                                TRAXLER
                      Six shots at less than ten
                      feet.  Weapon was a large
                      caliber--

        Vukovich is looking at the body.

                                VUKOVICH
                      No shit.

        Traxler turns to a passing DETECTIVE.

                                TRAXLER
                      Come on. man.  Don't track
                      it all over.  It's un-
                      professional.

        He turn back to Vukovich, gesturing at the body.

                                TRAXLER
                           (continuing)
                      Okay, let's see...Got a pos-
                      itive on her.  She's Sarah
                      Connor, works as a legal--


                                VUKOVICH
                           (interrupting)
                      That can't be right.  That's
                      the name of the one Valley
                      Division mopped up this after-
                      noon.

        Traxler slips something off his clipboard and hands
        it to the Lieutenant.

                                TRAXLER
                      Here's her driver's license.

                                VUKOVICH
                           (pondering)
                      You gotta be kidding me.  The
                      new guys'll be short-stroking
                      it over this one.  A one-day
                      pattern killer.

                                TRAXLER
                      I hate the weird ones.

                                               CUT TO:


58      INT. SARAH'S APARTMENT/BATHROOM                        58

        Sarah poses with Ginger in front of the mirror.  They are
        dressed, made-up, hair-styled and READY.

                                GINGER
                           (studying their
                           reflection)
                      Better than mortal man deserves.

        Sarah grins and goes into the other room.

                                               CUT TO:


59      INT. LIVING ROOM

        Sarah walks around the room, searching for something.

                                SARAH
                           (calling)
                      Ginger, have you seen Pugsley?

        Ginger enters, stopping beside their phone answering machine.

                                GINGER
                      Not lately.  Did you check
                      messages?

                                SARAH
                           (still looking)
                      I thought you did.

        She checks under the couch, then behind the drapes.  She
        bends down.

                                SARAH
                           (from beside cur-
                           tains)
                      Come here young man.  Mind
                      your mother.

        C.U. - PUGSLEY, as the GREEN IGUANA cocks its head, blinking
        vapidly.

        RESUME WIDE, Sarah lifts the three foot long lizard from his
        perch on the windowsill.  She gives the complacent reptile
        a kiss on its blunt snout.

                                GINGER
                           (groaning)
                      Totally nauseating.

        Sarah drapes the lizard across her shoulders where it sits
        contentedly as she looks for her purse.  Ginger has been
        rewinding the message tape.  She punches PLAY and a MALE
        VOICE is heard.

                                VOICE
                           (recorded)

                      Hi, Sarah...Stan Morsky.
                      Uh, something's come up and
                      it looks like I won't be able
                      to make it tonight.  I'm really
                      sorry.  Call you in a day or so.
                      Sorry.  'Bye.

        Sarah stands still, crestfallen.

                                GINGER
                      That bum.  So what if he has
                      a Porsche, he can't treat you
                      like that...it's Friday night
                      for crissakes.

                                SARAH
                           (slumping)

                      I'll live.

                                GINGER
                      I'll break his kneecaps.

        Sarah resignedly slips Pugsley off her shoulders.

                                SARAH
                      You still love me, don't
                      you, Pugsley?

        She places Pugsley in a large terrarium with a 'BEWARE OF
        DOG' sign taped on the side.

                                SARAH
                           (continuing)
                      I'm going to a movie, kiddo.
                      See ya'.  You and Matt have
                      a good time.

                                GINGER
                           (as Sarah exits)
                      We will, kiddo.

                                               CUT TO:


60      INT. PARKING GARAGE - NIGHT

        Sarah is a small figure in the shadowed echoing garage of
        her building.

        CONVERGING DOLLY, PACING HER, as she passes the stalls with
        their inky shadows.
        The light near her moped is out.
        She fumbles in the dark to unlock the chain.
        She looks up.
        Did she hear something...masked by the rattle of the chain?

        POV - SARAH, there is no movement for the length of the
        garage.

        ON SARAH - C.U., inexplicably nervous.
        She stows the chain and starts the bike.  It whines
        reassuringly.
        Sarah jumps on and whirs out of the garage.

                                               CUT TO:


61      INT. CAR/NEARBY - NIGHT                                61

        Sarah is visible through the windshield as she pulls onto
        the street.

        PAN WITH HER to reveal Kyle Reese, hunched down in shadow,
        watching.  He puts the car in gear and pulls out to follow
        her receding tail-light.
        Streetlights flash across his face, in stark-lines profile.
        Mouth cruel where the scar tugs at it.

                                               CUT TO:

62      INT. DIVISION HEADQUARTERS - NIGHT                     62

        DOLLYING WITH VUKOVICH and TRAXLER, as they pass through a
        group of REPORTERS.  Mostly newspaper stringers but there
        is also one bored local TV MINICAM CREW.

                                REPORTER
                      ...Lieutenant, are you aware
                      that these two killings occurred
                      in the same order as their listings
                      in the phone book?

                                VUKOVICH
                      No comment.

        He and Traxler enter their office and shut the door.

                                               CUT TO:


63      VUKOVICH'S OFFICE                                      63

        Vukovich drops his gun in the wastebasket, picks up a cup
        of coffee from his desk and uses it to wash down a handful
        of aspirins.  Traxler grimaces.

                                TRAXLER
                      That stuff's two hours cold.

                                VUKOVICH
                           (nodding ab-
                           sently)
                      I know.

                                TRAXLER
                           (eyeing him)
                      I put a cigarette out in it.

        Vukovich, lost in thought, turns on him suddenly.

                                VUKOVICH
                      Did you reach the next girl
                      yet?

                                TRAXLER
                      No.  Keep getting an answer-
                      ing machine.

                                VUKOVICH
                      Send a unit.

                                TRAXLER
                      I already did.  No answer at
                      the door and the apartment
                      manager's out.  I'm keeping
                      them there.

                                VUKOVICH
                      Call her.

                                TRAXLER
                      I just called.

                                VUKOVICH
                      Call her again.

        Traxler picks up the phone and begins to dial her number
        as Vukovich sets down his coffee cup, unwraps a stick of
        gum and pops it in his mouth.

                                VUKOVICH
                           (continuing)
                      Got a cigarette?

                                               CUT TO:


64      INT. SARAH'S APARTMENT - NIGHT                         64

        CLOSE ON PHONE, connected to the answering machine.  The
        outgoing message trigger after the second ring.

                                GINGER'S VOICE
                           (machine V.O.)
                      Hi there.
                           (long pause)
                      Ha ha ha, fooled you. You're
                      talking to a machine, but don't
                      by shy, it's okay.  Machines need
                      love too, so talk to it and Ginger,
                      that's me, or Sarah will get back
                      to you.  Wait for the beep.

        As the message plays, CAMERA DOLLIES OFF the phone machine
        and down the corridor of the dark apartment.  As the bedroom
        door draws near, Ginger's recorded voice fades and is super-
        ceded by CRIES and MOANS.

                                               CUT TO:


65      INT. BEDROOM                                           65

        FULL SHOT, framed against the streetlit curtains, Ginger and
        Matt from a beautiful tableau of lovemaking in silhouette.
        Their perfect bodies glisten with backlight as they strain
        in passion.

        CLOSER - TIGHT TWO, revealing that Ginger is wearing her
        earphones.  Matt, without breaking rhythm, reaches out to
        the night table and thumbs the volume higher.

        Ginger cries out louder, apparently enjoying his sure touch
        on her volume control.

                                               CUT TO:


66      INT. DIVISION HEADQUARTERS - NIGHT                     66

        Traxler hangs up the phone.

                                TRAXLER
                      Same shit.

                                VUKOVICH
                      I can hear it now, it's gonna
                      be the goddamned 'Phone Book
                      Killer'.

                                TRAXLER
                      I hate the press cases.
                      Especially the weird press
                      cases.  Where you going?


                                VUKOVICH
                           (heading for
                           the door)
                      To make a statement. I'm gonna
                      give them the name.  Maybe the
                      jackals can help us out for
                      once.

        He looks at his watch, then straightens his tie.

                                VUKOVICH
                           (continuing)
                      If they can get this on the
                      tube by eleven, she may just
                      call us.
                           (pause)
                      How do I look?

                                TRAXLER
                      Like shit, boss.

        Vukovich goes out and the Minicam light hits him as the
        door closes.

                                               CUT TO:

67      INT. PIZZA PARLOR - NIGHT                              67

        TIGHT ON A TV SCREEN, a news cast in progress.

                                ANCHORMAN (V.O.)
                      ...police had no further comment
                      on the apparent similarity between
                      the shooting death of an Encino
                      woman earlier today...

        CUT WIDE to show Sarah watching the TV which is suspended
        over the bar.  The place is a crowded, post-movie hangout,
        raucous with laughter and videogames.  The newscast
        continues, ignored by all except Sarah.

                                ANCHORMAN (V.O.)
                           (continuing)
                      ...and this almost identical
                      killing two hours ago of a
                      Venice resident with virtually
                      the same name.  Sarah Ann Connor,
                      a 24 year old legal secretary, was
                      pronounced dead at the scene in
                      her beachfront apartment...

        A customer gestures for the bartender's attention.

                                CUSTOMER
                      Hey, can we change this and
                      catch the ball scores.

                                BARTENDER
                           (reaching for the
                           knob)
                      Sure.

        Sarah leaps half over the bar, startling everyone.

                                SARAH
                           (shouting)
                      Leave it where it is!

                                ANCHORMAN (V.O.)
                      ...no other connections between
                      the two victims has been estab-
                      lished.
                           (pause)
                      On a lighter note, these was
                      cause for celebration at the
                      L.A. Zoo today, as...

        Sarah leaves her half-finished pizza and beer, getting up
        in a daze.  Followed by puzzles glances, she makes her way
        through the crowd.

                                               CUT TO:

68      INT. PIZZA PARLOR HALLWAY                              68

        In the crowded hallway by the restrooms, Sarah goes to the
        single payphone and seizes the directory.  She flips rapidly
        through it, then stops, looking down.
        She sees that her name is next on the list.
        The book slips out of her fingers.
        Sarah turns and scans the crowd.
        She's getting looks, covert and otherwise, like any unaccom-
        panied girl on a Friday night.  But is that all they mean?

        Sarah back into the women's restroom.

                                               CUT TO:

69      INT. RESTROOM                                          69

        Sarah stumbles numbly to the sink.
        She splashes her face with cold water.  In the mirror
        her terrified reflection looks back.  Why me?
        She hears a loud clatter and spins around.
        It's just a drunken woman fumbling with a toilet stall door.
        Sarah edges back out into the corridor.

                                               CUT TO:

70      INT. HALLWAY                                           70

        Sarah walks stiffly to the pay phone.
        It's OUT OF ORDER.

                                               CUT TO:

71      EXT. STREET/SIDEWALK - NIGHT                           71

        Sarah exits the pizza place into the sparse crowd on the
        sidewalk.  As she passes a figure leaning against the wall
        just outside, the man turns his head to watch her.
        It is Reese, his gaze impassive.
        Streetlight catches the burn scar on his cheek.
        He is motionless, sinister in his long coat.
        Sarah shudders.
        She walks on.

        POV - SARAH, ON CROWD, moving toward and through approaching
        groups of pedestrians.  They seem to be glancing at her.
        Was it always like that and she just never noticed?

        C.U. - SARAH as she look over her shoulder.

        POV - SARAH, ON PIZZA PARLOR DOORWAY.  Reese is gone.
        She resists the urge to run.
        On the opposite side of the street an  LAPD cruiser glides
        slowly by.  Sarah is about to call out but a bus blocks
        her view and when it had passed, the car is turning away
        down a side street.

        She passes a large window with STOKER'S written on it, and
        ducks quickly through the door.

                                               CUT TO:


72      INT. STOKER'S - NIGHT                                  72

        ANGLE THROUGH WINDOW, SARAH F.G., as Reese approaches.
        Her knuckles clench white as he reaches the entrance and
        walks by, unhurriedly, without a glance inside.
        She turns and scan the gloomy interior, which reveals itself
        to be less than savory.  Pool tables and upper-middle lowlife
        in submarine depths of smoky haze.

        Sarah draws stares, menacing in their own right, as she
        weaves between the pool tables to the back of the bar.
        her hands are trembling as she drops a dime in the pay
        phone and dials.

                                VOICE (V.O./RECORDED)
                      You have reached the Los Angeles
                      Police Department Emergency Number.
                      All lines are busy.  If you need
                      a police car sent out to you, please
                      stay on the line...

        Sarah holds the receiver pressed to her ear, glancing
        around, fear feeding on frustration.

                                               CUT TO:


73      EXT. SARAH'S APARTMENT BUILDING - NIGHT                73

        An LAPD black-and-white sits at the curb in front of Sarah's
        building with two cops inside, drinking coffee.  Through
        the open window we hear the dispatcher's voice on the
        radio.

                                DISPATCHER (V.O.)
                      ...two eleven in progress at
                      Seven-Eleven market, Third and
                      Tamarac.  One suspect believed
                      to be armed...

        The car pulls out with lights and siren on.
        A moment later, Terminator rounds the corner of the building
        and climbs the stairs to the entryway.
        He surveys the bank of call buttons, then turns to consider
        the barred security gate.

                                               CUT TO:


74      INT. SARAH'S APARTMENT - NIGHT                         74

        PANAGLIDE WITH GINGER as she ties her terry-cloth robe and,
        leaving Matt in a dead sleep, pads through the dark apartment.
        Down the hall, past the phone with Traxler's message.
        Through the dark living room.
        She has her Walkman in the pocket of her robe and bops to
        herself in the silent gloom as she enters the kitchen.

        When she opens the refrigerator to remove snack fixings, the
        light briefly illuminates the kitchen and in that moment,
        SOMETHING MOVES in the F.G.

        TIGHT ON GINGER, MOVING WITH HER as she backs toward the
        counter with her arms full of snack stuff.

        A SUDDEN CRASH.  A flurry of motion behind her.
        She spins, dropping half her load.
        Ginger fumbles for the lightswitch.

        Revealing Pugsley, sitting there blinking innocently among
        overturned spice bottles on the counter-top.

                                GINGER
                      Shoo.  Go on.  I'll make a
                      belt out of you.

        Pugsley disappears into a large fern by the window and Ginger
        sets about her task, slathering crunchy peanut butter on
        stalks of celery.

                                               CUT TO:


75      INT. BEDROOM                                           75

        MEDIUM ON MATT, as rustling curtains play patterns of street-
        light over his sleeping face.
        The sound of a faint breeze.
        In the B.G. is the balcony, empty.  The sliding door is open.

        TIGHT ON MATT, as his eyes open at the sound of a quiet,
        repeated CLICKING.

        UP ANGLE - PAST MATT, as the five-inch blade of an industrial
        razor-knife reaches full extension in Terminator's hand,
        right above him.
        It slashes viciously downward.
        Matt rolls and the pillow is SLIT OPEN where his throat had
        been.

                                MATT
                      Whoah!

        Terminator catches him by the hair and slashed down again.
        Matt grabs the wrist in both hands.
        The enormous muscles of his arms, which seem capable of bench
        pressing a Chrysler, strain and knot against the pressure of
        the killer's single arm...
        And still the blade moves closer to his throat.

        With a final heave Matt deflects the down-pressure sideways
        and the blade snaps with a CLINK against the headboard.

        HANDHELD WITH MATT as he rolls off the bed, spins and slams
        his fists together into Terminator's temple.  He picks up a
        brass deco lamp and brings it down with piledriver force.

        Unperturbed, Terminator knocks the lamp away and hurls Matt
        over the bed.

                                               CUT TO:


76      EXT. BALCONY - NIGHT                                   76

        Matt crashes through the glass doors and slams against the
        balcony railing.

                                               CUT TO:


77      INT. KITCHEN                                           77

        Oblivious to the noise, Ginger croons in rock-and-roll
        ecstasy, singing to a celery stalk as if it were a micro-
        phone.

                                               CUT TO:


78      EXT./INT. BALCONY AND BEDROOM - NIGHT                  78

        Matt heaves himself up, powerful body gleaming with sweat
        and hurls himself upon the intruder.
        The titans CRASH INTO A DRESSER, reducing it to kindling.
        Then into the closet door, EXPLODING THE FULL-LENGTH MIRROR.

        Terminator places one hand on either side of Matt's barrel
        chest.  SINKS HIS FINGERS INTO THE FLESH.  An inhuman grip.
        Matt is raised off the floor, contorted with agony, above
        the other's head.

                                               CUT TO:


79      INT. HALLWAY                                           79

        DOLLY PRECEDING GINGER as she returns from the kitchen with
        a plate full of celery stalks and a glass of milk.  CAMERA
        passes the closed bedroom door and STOPS, as Ginger pauses
        to set the plate on top of the glass, freeing one hand to
        open the door.

        AN EXPLOSION OF SPLINTERS in close F.G. as a shape smashes
        through the door right in front of her...Matt's body
        propelled halfway through the door by enormous force.
        Ginger shrieks and leaps back, flinging milk and all into
        the air.

        The door begins to open the pressure of Matt's body
        creates resistance.
        Ginger SCREAMS and back away.

        The door is wrenched open and Terminator steps through with
        the massive .45 drawn.

        HANDHELD WITH GINGER, the walls blur by as she runs.

        TIGHT ON TERMINATOR as the pistol RISES INTO FRAME, aligning
        with his eyes.  BOOM!

        LOW FAST DOLLY WITH GINGER as the bullet punches into her
        shoulder, pitching her on her face outside the bathroom door.

        LOW WIDE ANGLE as she crawls forward, gasping, drowning.
        The implacable figure looms behind her.
        Her expression is agony and reeling, nauseating terror.
        And incomprehension: Why am I suddenly dying?
        Her eyes roll, showing the whites, like a horse tethered in
        a burning stable.

                                               CUT TO:

80      INT. BATHROOM                                          80

        Ginger scrabbles pathetically for a grip on the tile floor
        as she pulls herself into the bathroom.
        She clutches the rim of the toilet.

        LOW ANGLE PAST HER, ON TERMINATOR, as he stands behind her.
        PAN UP, off her.  He takes aim.
        And empties the clip.
        He calmly reloads.

                                               CUT TO:


81      INT. HALLWAY/BEDROOM                                   81

        CLOSE ON PHONE MACHINE, as the telephone rings loudly in the
        ensuing silence.
        Terminator spins, drawing an instantaneous bead on the source
        of the sound, but doesn't fire.

                                GINGER'S VOICE
                           (recorded)
                      Hi there.
                           (pause)
                      Ha ha ha, fooled you.  You're
                      talking to a machine...

        C.U. - TERMINATOR, motionless, listening.

                                GINGER'S VOICE
                           (recorded, continuing)
                      ...but don't be shy, it's okay.
                      Machines need love too...

        Terminator turns abruptly back to Ginger's body.  He turns
        it over, assuring himself that she is dead.

                                GINGER'S VOICE
                           (continuing, recorded)
                      ...so talk to it and Ginger, that's
                      me, or Sarah will get back to you.
                      Wait for the beep.

        There is a loud tone and the incoming call is heard.

                                SARAH'S VOICE
                           (on machine)
                      Ginger, this is Sarah...

        Terminator's head snaps back and he freezes, listening.
        He rises slowly as Sarah's voice continues.

        TIGHT ON HIS UNBLINKING EYES.

                                SARAH'S VOICE
                           (on machine, contin-
                           uing)
                      ...I'm in this sleazy bar called
                      Stoker's on Pico but I'm too
                      scared to leave.  I'm really
                      scared, kiddo...

                                               CUT TO:


82      INT. STOKER'S BAR - NIGHT                              82

        Sarah cups the telephone's mouthpiece with her hand and
        glances around frequently.

                                SARAH
                           (continuing, into
                           phone)
                     ...I think somebody's after me
                     and I sure hope you play this
                     soon 'cause I need you and Matt
                     to come pick me up.  The police
                     keep transferring me around, but
                     I'm going to try them again.

                                               CUT TO:


83      INT. SARAH'S APARTMENT/BEDROOM - NIGHT                 83

                                SARAH
                           (continuing, B.G.)
                      The number here is 468-9175.
                      Call me, kiddo.  I need you.
                      It's Stoker's on Pico. Bye.

        Terminator is rapidly and methodically rifling the contents
        of Sarah's small desk.  SIREN'S WAIL, approaching.
        He picks up a small card.

        E.C.U. - CARD. It is Sarah's college I.D. card, complete with
        color photo of her.

        MACRO ON PICTURE.

        E.C.U. - TERMINATOR'S EYES as he tosses the card down,
        after a fraction of a second's scan.  Picks up something else.

        TIGHT ON SARAH'S ADDRESS BOOK, Terminator pockets this and
        slips out the balcony door.  Climbing over the railing, he
        is gone.

                                               CUT TO:


84      INT. STOKER'S BAR - NIGHT                              84

        Sarah is huddled, back to the wall, beside the phone.

                                SARAH
                           (on phone, upset)
                      ...look, Lieutenant...uh,
                      Vukovich, don't put me on
                      hold and don't transfer me
                      to another department...

                                               CUT TO:


85      INT. VUKOVICH'S OFFICE - NIGHT                         85

                                VUKOVICH
                           (on phone)
                      I won't.  Now just relax.
                      Where are you?
                           (pause)
                      Yeah, I know it...on Pico.
                      Are you alright?

                                               CUT TO:


86      INT. STOKER'S BAT - NIGHT                              86

                                SARAH
                           (on phone)
                      Yes, but I don't want to
                      leave.  I think this guy's
                      following me.

                                               CUT TO:


87      INT. VUKOVICH'S OFFICE - NIGHT                         87

                                VUKOVICH
                           (on phone)
                      Alright, Ms. Connor.  Listen
                      carefully.  You're in a public
                      place, you'll be safe 'til we
                      get there.  Stay visible.
                      Don't go outside or in the
                      restroom.  I'll be there in
                      a few minutes.

        He hangs up and grabs his coat, motioning to Traxler.

                                VUKOVICH
                      Let's roll.

                                               CUT TO:


88      INT. STOKER'S BAR - NIGHT                              88

        Sarah takes a seat at a booth near the bar, and picks up
        a dog-eared menu, but can't concentrate on it.  She looks
        at her watch and glances around.

                                               CUT TO:


89      EXT. STREET - NIGHT                                    89

        The yellow Maverick hurtles along an empty street.

        CLOSER ANGLE as streetlight glare slashes across Terminator's
        face in flaring pulses.

                                               CUT TO:


90      INT. PLAIN CAR - NIGHT                                 90

        Vukovich draws his Colt Python .357 Magnum and check the
        load.  Traxler is driving.

                                VUKOVICH
                      Let's see how this guy likes
                      playing hard-ball.

                                               CUT TO:


91      INT. STOKER'S BAR - NIGHT                              91

        The waitress set a cup of coffee in front of Sarah.

                                WAITRESS
                      Anything else?

        Sarah shakes her head "No" and contemplates her trembling
        hands.  She half-turns, catching a glimpse of herself in
        the mirror behind the bar.

        TIGHT ON SARAH, reflected in the mirror.  In the F.G. a
        man at the bar looks up from his beer, straight into her eyes.
        It is Reese.
        He gazes at her coolly for a moment, then glances away.

        C.U. - SARAH, feeling trapped, frantic.

        ANGLE ON FRONT DOOR as it opens and a figure stands silhou-
        etted briefly against a streetlight.

        Reese turns, his eyes flickering to the mirror, the figure.

        C.U. - REESE as he mechanically raises his beer.  His knuckles
        are white.  He slowly undoes the top button of his overcoat.
        There is a glint of metal in the shadows within.
        Reese turns slowly on his barstool as the figure brushes past
        him, out-of-focus F.G.
        Sarah looks up.

        E.C.U. - REESE'S HAND sliding slowly along polished steel,
        a caress.  His finger slips through the triggerguard of the
        riot gun.

        MEDIUM ON SARAH, as the man stops in front of her in close F.G.
        He sits slowly in the booth opposite her.  The angle is OVER
        HIS SHOULDER.

                                SARAH
                           (uncertainly)
                     Lieutenant Vukovich?

        REVERSE ANGLE - It is not Lt. Vukovich.
        Terminator sits motionless for a BEAT.
        Blue eyes so pure and deep.  The eyes of a saint, perhaps.

        The .45 is out and cocked and AIMED DIRECTLY AT CAMERA, almost
        in one motion.
        The bore seems enormous.

        BACK ON SARAH, over the gun barrel, her eyes go wide.  We hold
        a BEAT, like a frozen slice of nightmare.

        MEDIUM ON REESE as he whips the riot-gun to a hip-firing posi-
        tion, his overcoat falling back with a snap.  HE FIRES.

        ON TERMINATOR, as the shotgun blast hits his arm and he FIRES,
        simultaneously.  Sarah screams as the .45 round blows stuffing
        out of the booth seat inches from her face.  Her hair is
        singed by burning gunpowder.  An involuntary cry is punched
        out of her by the double concussions.

        Reese is stroking up another shell as Terminator half-rises
        from booth.

        OVER REESE'S SHOULDER, as he fires, cocks the slide, fires
        again, advancing on Sarah's booth.
        Terminator is blown backward over the center divider,
        crashing through the glasses and pitchers of beer on the
        table opposite, and onto the floor.

        Sarah is screaming, scrunched down in the booth.

        Terminator is lying on his back at the feet of a table-
        full of drunk patrons.
        He has two rifled 12 gauge slugs in his chest and one
        in the arm.

        The bar customers are frozen in the weird tableau, cowering,
        gaping.
        Sarah stops screaming.
        Reese stand motionless, gun aimed.
        In the sudden silence, the sound of him cocking the shotgun
        is abnormally loud.

        ON TERMINATOR, very still.
        Then he smoothly rolls to a crouch and slips the UZI machine
        pistol from beneath his overcoat, where it has been hang-
        ing on a shoulder strap.
        He doesn't seem too impaired as he swings around to fire.

        Reese rolls like a cat and comes up firing.
        A burst from the UZI rakes the bar where he stood.
        An orgy of shattering glass.
        Total pandemonium.

        SEVERAL ANGLES  as patrons of the bar run, scream or dive
        for cover, depending upon their level of intelligence.

        Reese slides through the glass to Sarah's booth and seizes
        her wrists.

        ON TERMINATOR, kneeling amid the chaos, raising the UZI
        one-handed.

        Reese tugs viciously on Sarah's arm and she sprawls across
        the booth seat a moment before the divider and seat cushion
        erupt with hits from the UZI.

        ANGLE ON A RUNNING PATRON as a burst of 9mm fire catches
        him in the chest.  He pitches into Sarah's booth, pinning
        her.

        Reese fires, ducks, fires again.
        Tables crash over.
        A window is blown out.
        A table candle rolls into a pool of high-proof alcohol
        behind the bar.
        It ignites with a WHOOSH.

        Reese feed two shells into the riot-gun.

        TIGHT ON TERMINATOR, an island of slow, precise movement
        amid the confusion.  He drops a spent clip.  Reaches for
        another with his bloody hand.

        MOVING WITH REESE as he vaults the row of booths and starts
        firing.  At point blank range he unloads the shotgun into
        Terminator's belly.

                                               CUT TO:


92      INT./EXT. STOKER'S/STREET - NIGHT                      92

        Terminator crashes backwards through two tables and a plate
        glass window into the street.

                                               CUT TO:


93      INT. STOKER'S BAR - NIGHT                              93

        The roaring fire behind the bar is spreading very quickly.
        The air is thick with smoke.
        Reese tosses the UZI, for which he has no ammo, into the
        fire.  He hauls the dead man off Sarah and reaches for her.

        TIGHT ON SARAH, shrinking away from Reese, hysterical.
        When he grabs her wrist she struggles, eyes wide.

        C.U. - REESE, very intense.

                                REESE
                     Come with me if you want
                     to live.

        She looks where he is pointing.

                                               CUT TO:


94      EXT. STOKER'S BAR/STREET - NIGHT                       94

        Terminator is rising unsteadily to his feet.  Shattered
        glass rains from him, except where it sticks to his blood-
        drenched shirt and coat.

        C.U. - TERMINATOR, as he slowly look up, his blue eyes
        riveting STRAIGHT INTO THE CAMERA.

                                               CUT TO:


95      INT. STOKER'S BAR - NIGHT                              95

        C.U. - SARAH, feeling a lightning blot of terror greater
        than she could ever imagine as the cold gaze fixes on her.

                                SARAH
                           (awed whisper)
                     Oh my God...

                                               CUT TO:


96      INT./EXT. STOKER'S BAR - NIGHT                         96

        PANAGLIDE PRECEDING TERMINATOR as he clambers back through
        the window and starts through the burning bar.

                                               CUT TO:


97      INT. STOKER'S BAR - NIGHT                              97

        PANAGLIDE MOVING IN ON REESE AND SARAH as he runs, drag-
        ging her with him, toward the back.

        REVERSE ON TERMINATOR, DOLLYING as he crashed through the
        wreckage in the swirling smoke, hurling burning tables out
        of his way.

                                               CUT TO:


98      INT. KITCHEN/HALLWAY/EXIT CORRIDOR                     98

        PANAGLIDE FOLLOWING REESE AND SARAH, running headlong
        through the cluttered kitchen, then down a narrow back
        hallway.  Sarah stumbles and Reese brutally pulls her to
        her feet without slowing.

        He hits a closed door, which crashes open.
        Hauls Sarah through, into another corridor.
        Slams and blot-latches it.
        An instant later an impact from the far side tears the
        latch-screws half out of the wall.
        They run on.

                                               CUT TO:


99      INT. HALLWAY - NIGHT                                   99

        Terminator takes a step back from the closed door and
        slams into it again.  It starts to give way.
        behind him the flames engulf a CAN OF CLEANING SOLVENT.

                                               CUT TO:


100     INT./EXT. EXIT CORRIDOR/ALLEY - NIGHT                  100

        Reese and Sarah pelt down the narrow corridor, fling open
        the outside door and spin out into the alley.

        TIGHT ON DOOR at far end.  It splinters open and Terminator
        sprints down the corridor.

                                               CUT TO:


101     INT. HALLWAY - NIGHT                                   101

        The cleaning solvent EXPLODES.

                                               CUT TO:


102     INT. EXIT CORRIDOR - NIGHT                             102

        DOLLYING AHEAD OF TERMINATOR, very fast, as he runs full-
        throttle.  Behind him a fireball of superheated gas hurtles
        down the narrow hallway.  He clears the outer door an
        instant before the tongue of flame roars out into the alley.

                                               CUT TO:


103     EXT. STREET IN FRONT OF STOKER'S - NIGHT               103

        Vukovich's plain car arrives, slewing to a stop in the
        glass-littered street in front of the blazing building.
        He leaps out, Traxler right in behind him.

                                VUKOVICH
                           (shouting)
                     What the fuck is going on?

        TWO LAPD UNITS arrive behind them.  He motions to the
        nearest one.

                                VUKOVICH
                           (continuing)
                     Cover the alley in back.

        He heads for the inferno at a run.

                                               CUT TO:


104     EXT. ALLEY BEHIND STOKER'S - NIGHT                     104

        DOLLYING WITH REESE AND SARAH as they run through the
        dark alley.  Sarah stumbles over trashcans.
        Reese pulls her along mercilessly.

        WHIP-PANNING as they clear a corner.
        The B.G. is a blur.
        The night-maze is a blur in all of these shots.
        No static angles.
        Relentless forward motion.

                                               CUT TO:


105/FX  EXT. ALLEY - NIGHT                                     105/FX

        Behind them Terminator is moving with inhuman speed,
        bounding like a panther, leaping trash cans and other
        obstacles.

        TRACKING C.U. - TERMINATOR, catching the faintest glimpse
        of a red glow in the pupils of his eyes as he passes through
        total shadow.

                                               CUT TO:


106/FX  EXT. ALLEY/POV - TERMINATOR (HANDHELD) - NIGHT         106/FX

        We know this is Terminator's POV because Sarah and Reese
        are just ahead of us.  But the image is bizarre, alien.
        Bright and hyper-real.  There is a hint of digitization,
        and the fleeing figures ahead are more luminous than the
        background, suggesting infra-red.
        The margins of the FRAME are crammed with columns of CRT-
        type characters: columns of numbers and acronyms.  The
        data changes more rapidly than any human eye could follow.
        There is no doubt that we are seeing as a machine would see.
        The sound effects are bright and clear, as if they are
        digitized and enhanced as well.

                                               CUT TO:


107     EXT. ADJOINING ALLEY - NIGHT                           107

        Reese and Sarah turn a corner by caroming off the wall
        without slowing and pelt down a narrower alley.  This
        one is lined with a row of parked cars and connects to
        the street.  There is little room to run.
        Reese is reloading on the run, dropping shells.

        Behind them Terminator enters the alley, gaining.

        LOW ANGLE, FAST PANAGLIDE ahead of the fleeing pair.
        As they breast the last car Reese shoves Sarah hard,
        pitching her on her face to the pavement.
        He flings open the car door...a shield.
        Drops to the ground.
        Fires into the gas tank of a car further back in the row
        just before Terminator reaches it.

        The car EXPLODES, filling the alley with fire.  An inferno
        funneled between the enclosing walls.

        ANGLE ON REESE AND SARAH behind the car door as flames
        roar over the hood.

        ON TERMINATOR, as he slides to a stop, cut off by the
        wall of flame.

        Reese doesn't waste any time stuffing Sarah into the car.
        Climbing in after and over her he twists two wires together
        and we recognize it as his stolen GREY SEDAN.
        The engine catches.

        A SILHOUETTE rockets out of the flames.
        Terminator, leaping from the roof of the blazing car ahead,
        impacts on the hood of Reese's car.  His hair and coat are
        burning.

                                               CUT TO:


108     INT./EXT. GREY SEDAN/ALLEY - NIGHT                     108

        Reese jams reverse and nail the throttle.
        The car backs down the alley.
        Terminator draws back his fist.
        Punches into the windshield.
        Inside, Sarah is sprayed with glass as the killer's fist
        shoots through.
        The lacerated fingers grope for her.

        WIDE as the car shoots backwards out of the alley onto the
        street, narrowly missing an arriving LAPD CRUISER.

        Sarah plasters herself tightly into the seat as the
        fingers grasp her blouse and pull.
        Reese cranks the wheel hard.

                                               CUT TO:


109     EXT. STREET - NIGHT                                    109

        The sedan skids, slewing sideways into a parked car.

        Terminator rolls down off onto the pavement.
        Reese's car shoots forward.

        PANNING WITH SEDAN as it roars past Vukovich, the gathering
        minions of the burning building, an arriving fire
        truck...shoots through a red light and continues to accel-
        erate.

        Terminator gets to a kneeling position, then slowly stands.
        He pats out his smoldering clothing as he watches his quarry
        escape.

                                               CUT TO:


110     EXT. STREET - NIGHT                                    110

        ON VUKOVICH as he runs to his car, exhorting the nearby
        LAPD guys to give pursuit, while Traxler grabs the radio.

                                VUKOVICH
                           (shouting)
                     Go!  Go!  He's got her.

                                TRAXLER
                           (overlapping)
                     Suspect westbound on
                     Olympic.  Grey sedan.  Has
                     hostage, repeat...

                                               CUT TO:


111     EXT. STREET - NIGHT                                    111

        LOW WIDE ANGLE on the empty street, which is narrow and
        tightly lines with parked cars.
        The ROAR of an engine builds.
        The sedan, like a night-demon, hurtles out of the shadows
        with its lights off, doing ninety plus.

                                               CUT TO:


112     INT. GREY SEDAN - NIGHT                                112

        Sarah is in a daze.
        Paralyzed.  Face bloodless.
        She is shivering silently, uncontrollably.
        Her eyes are wide, and it seems likely that she doesn't
        quite comprehend the roaring blur outside her window.

                                REESE
                           (calmly)
                     Hold on.

                                               CUT TO:


113     EXT. CITY STREETS - NIGHT                              113

        WIDE ANGLE, CLOSE TO SEDAN, and following it as it hurtles
        around a corner in an expertly controlled slide.
        Then a high speed sprint down the cross-street.
        Reese squirrels the vehicle between a slow-moving car
        ahead and oncoming traffic.
        A dive into another dark side street.

                                               CUT TO:


114     INT. GRAY SEDAN - NIGHT                                114

        Reese drives with total, nerveless absorption.  His eyes
        flick to the mirror, to the road, over his shoulder, back
        ...and the world spins outside.
        With occasional glances to Sarah, he speaks to her in a
        clipped, military voice.

                                REESE
                     Are you injured?  Are you
                     shot?

        No response.
        He reaches over and runs his hands over her arms, legs,
        chest.  Sarah flinches.
        She feels the BLIND PANIC BOILING UP WITHIN HER.
        She pushes his hand away and opens the door.
        Reese slams her back in the seat and slaps her.  Hard.

                                REESE
                           (continuing)
                     Do exactly what I say.
                     Exactly.  Don't move un-
                     less I say.  Don't make a
                     sound unless I say.  Do
                     you understand?

        As he speaks he is locking the door and fastening Sarah's
        seatbelt over her, cinching it very tightly, like you would
        for a child.  She doesn't answer.

                                REESE
                           (continuing/
                           shouting)
                     Do you understand?

                                SARAH
                           (a whisper)
                     Yes.  Don't hurt me.

                                REESE
                     I'm here to help you.  Reese,
                     Sergeant/Tech-Com, DN38416...

        Sarah stares numbly at his outstretched hand.  With zero
        strength she automatically returns his handshake.

                                REESE
                           (continuing)
                     Assigned to protect you.
                     You've been targetted for
                     termination.

                                               CUT TO:


115     EXT. SIDE STREET/ALLEY - NIGHT                         115

        The walls of a narrow alley, inky black, frame a police
        cruiser parked on the street beyond.  Firelight from the
        back of Stoker's lights the street garishly.
        A young cop  stands beside the car talking via radio with
        the mike cord pulled through the side window.  He speaks
        with a distinctive twang--a displaced southerner.

                                COP
                      ...I don't know, it looks
                      like it might spread to this
                      furniture warehouse across
                      the alley, the paint on the
                      wall's starting to blister
                      up...

        The sweeping headlights of a turning car momentarily illuminate
        the face of Terminator, motionless in the dark right in
        front of us.
        Eyes open.  Listening.

                                COP
                           (continuing)
                      Better get another truck
                      round to this side.

        Terminator's silhouette emerges from the blackness and
        strides purposefully toward the cop, CAMERA following.

        The officer whirls and reaches for his gun but Terminator
        flings him brutally into the side of the car, steps over
        him and opens the door.
        Before getting in he notes the unit number on the roof: 143.
        Then he slides behind the wheel, slips the squad car into
        gear, and pulls out.

        CAMERA PRECEDING CAR, HIDE WIDE ANGLE, as it accelerates
        rapidly, until the lines across the street are flashing
        under it in a staccato rhythm.

                                               CUT TO:


116     INT. GREY SEDAN - NIGHT                                116

        Sarah is slumped way down in the seat, turned away from the
        window, trying not to see the landscape reeling outside.

                                SARAH
                           (hoarse whisper)
                      This is a mistake.  I haven't
                      done anything.

                                REESE
                      No. But you will.  It's
                      very important that you
                      live.

        Sarah closes her eyes, as if to shut it all out.

                                SARAH
                      I can't believe this is happen-
                      ing.  How could than man get up
                      after you...

        Reese's tone is equal parts hatred and respect as he replies.


                                REESE
                      Not a man.  A Terminator.
                      Cyber Dynamics Model 101.

                                               CUT TO:


117     INT. SQUAD CAR - NIGHT                                 117

        Terminator drives expressionlessly, monitoring the babble
        from Central Dispatch.  He hears his number.

                                DISPATCHER (V.O.)
                           (filtered)
                      ...Suspect vehicle sighted on
                      Motor at Pico, southbound.
                      Units Two-Zero-Six and Five-
                      Seven, attempt intercept.
                      Unit One-Four-Three, come in.

        Terminator picks up the mike.  He speaks in a
        simulation of the young cop's southern twang.

                                TERMINATOR
                      This is One-Four-Three.  West-
                      bound on Olympic, approaching
                      Overland.

                                               CUT TO:


118     EXT. SANTA MONICA FREEWAY - NIGHT                      118

        The grey sedan moves through traffic like a hell-bent
        wraith.  Reese has the hammer down.  He handles the
        car with nerves of steel.

                                               CUT TO:


119     EXT. POLICE HELICOPTER - NIGHT                         119

        Below, Reese's sedan snakes along at 110 plus.  The
        chopper, F.G., drops toward it.

                                PILOT (V.O.)
                           (filtered)
                      Air-unit Two.  We're on him.
                      Westbound Santa Monica at 405.

                                               CUT TO:


120     INT. GREY SEDAN - NIGHT                                120

                                SARAH
                      A machine?  You mean, like
                      a robot?

                                REESE
                      Not a robot.  Cyborg.
                      Cybernetic Organism.

        They have to yell over the roar of air through the broken
        windshield.

                                SARAH
                      But...he was bleeding.

        At that moment a blinding light sears down on them from
        above.  Reese looks over his left shoulder and sees a
        CHP cruiser coming alongside.

                                REESE
                      Just a second.  Keep your
                      head down.

                                               CUT TO:


121     EXT. FREEWAY - NIGHT                                   121

        The helicopter is right above the, its spotlight burning
        on Reese.  The cruiser flanks them, closing.  Reese peels
        off to the right, inches in front of a tractor-trailer rig,
        brakes hard and slides into a four-wheel drift through a
        curving off-ramp.
        The helicopter banks, following.
        The cruiser swaps ends trying to maneuver and slams broad-
        side into the guardrail.  Out of action.

                                               CUT TO:


122     EXT. OFF RAMP/INTERSECTION - NIGHT                     122

        The sedan roars across the street without slowing
        and vanishes down a tree-lined side street.

                                               CUT TO:


123     EXT. POLICE HELICOPTER - NIGHT                         123

        DOWN ANGLE - AERIAL past the chopper, F.G., as its searchlight
        sweeps over the close-knit treetops.

                                               CUT TO:


124     EXT. SIDE STREET/INTERSECTION - NIGHT                   124

        The sedan skids around a corner, F.G., as the searchlight
        filters in shafts through the trees further down the street,
        sweeping futility back and forth.

                                               CUT TO:


125     EXT. POLICE HELICOPTER - NIGHT                         125

        It hovers indecisively, then banks off.

                                PILOT (V.O.)
                           (filtered)
                      Lost him.

                                               CUT TO:


126     INT. GREY SEDAN - NIGHT                                126

        Reese is ultra-alert, craning to look up, back, forward.

                                REESE
                      Good cover.
                           (pause)
                      Alright.  Listen.
                      The Terminator's an infil-
                      tration unit.  Part man, part
                      machine.  Underneath, it's a
                      hyperalloy combat chassis,
                      mircoprocessor-controlled,
                      fully  armored. Very tough...

        He pauses as they slide around another corner.

                                               CUT TO:


127     EXT. STREET - NIGHT                                    127

        Reese's sedan glides out onto a main drag, very subdued.
        He turns the lights on and blends with traffic.
        The helicopter crosses laterally in the distance.

                                               CUT TO:


128     INT. GREY SEDAN - NIGHT                                128

                                REESE
                           (continuing)
                      But outside, it's living
                      human tissue.  Flesh, skin,
                      hair...blood.  Grown for the
                      cyborgs.

                                SARAH
                      Look, Reese, I know you want
                      to help, but...

                                REESE
                           (cutting her off)
                      Pay attention.  The 600
                      series had rubber skin.
                      We spotted them easy.  But
                      these are new.  They look
                      human.  Sweat, bad breath,
                      everything.  Very hard to
                      spot.  I had to wait 'til
                      he moved on you before I
                      could zero him.

                                SARAH
                      Hey, I'm not stupid, y'know.
                      They can't build anything like
                      that yet.

                                REESE
                      No.  Not yet.  Not for about
                      forty years.

        Reese is driving sedately for a low profile, but his eyes
        rove constantly, searching for a place to ditch the car.
        Sarah's eyes are alert as well, and her tone becomes a bit
        too cool.

                                SARAH
                      So, it's from the future, is
                      that right?

                                REESE
                      One possible future.  Four your
                      point of view.  I don't know the
                      tech stuff.

                                SARAH
                      And you're from the future too?

                                REESE
                      Right.

        They come to a red light and Reese stops.

                                SARAH
                           (patronizingly)
                      Right...

        Like a shot she unlatches the seatbelt, pulls the door lock
        and has the door half open before Reese can react.  He catches
        her arm and hauls her struggling back into the car.

        Sarah sinks her teeth into his hand with all her strength.
        His grip doesn't slacken.
        Slowly, without releasing her, he reaches across with his
        other hand and shuts the door.  His face shows no reaction.

        Sarah draws back and stares at the blood running down his
        arm from the bite, that at his grim, scarred face.  The
        light turns green and Reese drives on.
        Sarah tastes blood and wipes her mouth.

                                REESE
                           (coldly)
                      Cyborgs don't feel pain.  I
                      do.  Don't...do that...again.

        He wipes his hand on his pants.

                                SARAH
                           (weakly, plead-
                           ing)
                      Just let me go.

                                REESE
                           (slow, but intense)
                      Listen.  Understand.  That
                      Terminator is out there.  It
                      can't be reasoned with, it can't
                      be bargained with...it doesn't
                      feel pity of remorse or fear...
                      and it absolutely will not stop.
                      Ever.  Until you are dead.

        Sarah slump in utter resignation.

                                SARAH
                           (quietly)
                      Can you stop it?

        Reese doesn't look at her.

                                REESE
                      Maybe.  With these weapons...
                      I don't know.

                                               CUT TO:


129     EXT. PARKING LOT - NIGHT                               129

        Reese's car turns into the parking lot of a large hospital,
        acres of pavement dotted with sporadic parked cars.

                                               CUT TO:


130     EXT./INT. TERMINATOR'S CRUISER - NIGHT                 130

        ANGLE THROUGH WINDSHIELD, ON TERMINATOR, as he searches.
        Streetlights flare across rhythmically.

                                               CUT TO:


131     EXT. POLICE HELICOPTER - NIGHT                         131

        It moves between two buildings, searchlight sweeping back
        and forth.  DOWN ANGLE, past the chopper, as the circle of
        light moves across a row of parked cars.
        It passes a grey sedan with a shattered windshield.
        Flicks back.  Holds.

        TIGHTER ON CAR, GROUND LEVEL, in the glare and propwash.
        It looks empty.

                                               CUT TO:


132     EXT. PARKING LOT/NEARBY  - NIGHT                       132

        LOW ANGLE DOLLY, MOVING WITH REESE AND SARAH as they crawl
        behind a row of parked cars.

        He has firm hold of her arm but she seems to be cooperating.
        In the B.G., the chopper hovers, on the far side of the lot.
        Reese approaches the door of a late model brown Buick which
        has been left with its window partway down.
        He unlocks it and they slip inside.

                                               CUT TO:


133     EXT./INT. TERMINATOR'S CRUISER - NIGHT                 133

        TIGHT ON TERMINATOR, through the windshield of the black-
        and-white.

                                DISPATCHER (V.O.)
                           (filtered)
                      Suspect vehicle located at
                      parking lot, Cedar and Glen-
                      haven...

        FULL SHOT as Terminator's cruiser slews in a radical turn
        and roars off in the opposite direction.

                                               CUT TO:


134     INT./EXT. BROWN BUICK/PARKING LOT - NIGHT              134

        Reese uses the butt of the shotgun to smash loose the
        ignition assembly.  He begins working on the wires.  A
        police cruiser appears, moving slowly between the rows of
        cars.

        Reese grabs Sarah and pulls her down to huddle below dash
        level.  A moment later a spotlight flashes across the seats
        above them.  They hear the helicopter circling closer.

                                SARAH
                      Reese...why me?  Why does
                      it want me?

        They are lying very close, a forced intimacy.  Reese's voice
        is an urgent whisper, almost in her ear.  A cruiser passes
        so close they can hear its radio clearly.

                                REESE
                      There's so much...

                                SARAH
                      Tell me.  Just start at the
                      beginning.

        Reese musters his thoughts.  And starts.

                                REESE
                      There was a war.  A few years
                      from now.  Nuclear war.  The
                      whole thing.  All this--

        His gesture includes the car, the city, the world.

                                REESE
                           (continuing)
                      --everythingis gone.  Just
                      gone.  There were survivors.
                      Here.  There.  Nobody knew who
                      started it.
                           (pause)
                      It was the machines.

                                SARAH
                      I don't understand...

                                REESE
                      Defense network computer. New.
                      Powerful.  Hooked into everything.
                      Trusted to run it all.  They say it
                      got smart...a new order of intelli-
                      gence.  Then it saw all people as
                      a threat, not just the ones on the
                      other side.  Decided out fate in a
                      microsecond...extermination.

        Reese pauses, and when he continues it's less like a military
        briefing, quieter.

                                REESE
                           (continuing)
                      Didn't see the war.  I was born
                      after, in the ruins.  Grew up
                      there.  Starving.  Hiding from
                      the H-K's.

                                SARAH
                      The what?

                                REESE
                      Hunter Killers.  Patrol machines.
                      Build in automated factories.
                      Most of us were rounded up, put in
                      camps...for orderly disposal.

        He pushes up the sleeve of his jacket and shows
        her a ten digit number etches on the skin of his forearm.
        Beneath the numbers is a pattern of lines like the auto-
        matic-pricing marks on product packages.

                                REESE
                           (continuing)
                      Burned in by laser scan.
                           (pause)
                      Some of us were kept alive...
                      to work.  Loading bodies.  The
                      disposal units ran night and day.
                      We were that close to going out
                      forever...

        The helicopter moves overhead.  Its searchlight illum-
        inates the car interior, moves on.  Before the rotor
        sound fads, Reese starts the car.

                                               CUT TO:


135     EXT. PARKING LOT - NIGHT                               135

        Several black-and-whites are moving among the parked
        cars, slowly.

        ANGLE ON TERMINATOR'S CRUISER rolling along just above
        idle.  He peers into the row of cars, listening and
        seeing on level we can't.

                                               CUT TO:


136     INT. BROWN BUICK - NIGHT                               136

        Reese is holding onto Sarah's shoulder tightly.

                                REESE
                           (continuing)
                      ...but there was one man...who
                      taught us to fight.  To storm
                      the wire of the camps.  To
                      smash those metal mother-
                      fuckers into junk.  He turned
                      it around...he brought us back
                      from the brink.
                           (pause)
                      His name is Connor.  John Connor...
                      your son, Sarah.  Your unborn son.

        Sarah stared at him.

                                               CUT TO:


137     EXT. PARKING LOT - NIGHT                               137

        The brown Buick is F.G. as the nose of Terminator's cruiser
        appears behind it, moving slowly.

        C.U. - TERMINATOR, scanning.

        LOW ANGLE, past the back of the Buick, as Terminator
        cruises by.  The tailpipe, F.G., puffs quietly.
        Terminator's head snaps around.
        His eyes lock on Reese's car.
        He reaches for his shotgun.

                                               CUT TO:


138     INT. BUICK - NIGHT                                     138

        Reese's head jerks up, looking in the mirror.

                                               CUT TO:


139     EXT. PARKING LOT - NIGHT                               139

        Reese's car launches forward from its space, tires
        spinning as Terminator fires from the window of the
        cruiser.

                                               CUT TO:


140     INT. BUICK - NIGHT                                     140

        The rear window explodes and Reese ducks, then cranks
        the wheel.

                                               CUT TO:


141     EXT. PARKING LOT - NIGHT                               141

        Reese and Terminator race along opposite sides of a
        row of cars, approaching the exit.
        The cruiser pulls ahead and closes diagonally as they
        clear the last car.
        Reese sees the other's shotgun leveled.
        He ducks, steering blind, keeps it floored.
        The windshield and side window EXPLODES INWARD.

        The Buick slams into the black-and-white, spinning it into
        a parked truck.  TIRES SCREAM as the two cars slew around
        heading for the exit.

        SEVERAL ANGLES, as the police react.

        The chopper banks tight and dives across the tops of
        the parked cars.  Cruisers race to converge.

                                               CUT TO:


143     EXT. STREET - NIGHT                                    143

        LOW WIDE ANGLE, PRECEDING REESE'S BUICK as it hits the
        street, accelerating.  Terminator's cruiser slides out
        behind it, fishtails, races forward.
        Engines roar as the cars go flat out.  Buildings lining
        the street become a blur.
        The chopper arcs in behind them.
        Legitimate police, lights blazing, enter the pursuit
        one by one.

        LOW ANGLE, MOVING WITH TERMINATOR'S CAR as Reese dodges
        across all lanes ahead of it.
        Terminator gaining.
        They run an intersection at a hundred plus.

                                               CUT TO:


144     INT. BUICK - NIGHT                                     144

        Reese is feeding his last two shells into the riot gun.

                                REESE
                           (yelling)
                     Steer!

        Holding the gun is both hands he leans out the window,
        still keeping the throttle mashed down.
        Sarah grabs the wheel, fighting to control the car.

                                               CUT TO:


145     EXT. STREET/BUICK - NIGHT                              145

        MOVING WITH THE BUICK, looking back, as Reese aims the
        shotgun, buffeted by the windstream.
        Terminator's car, B.G., overtakes rapidly.

                                SARAH
                           (shouting)
                     Reese!

                                               CUT TO:


146     INT. BUICK - NIGHT                                     146

        OVER SARAH'S SHOULDER as they approach an intersection...
        red light their way and an ALPHA BETA TRUCK entering cross
        wise.

                                               CUT TO:


147     EXT. STREET/CARS - NIGHT                               147

        Past Terminator, F.G., his shotgun aimed as he comes along
        side...at Reese.
        They are staring down each other's barrels.

                                               CUT TO:


148     INT. BUICK - NIGHT                                     148

        Sarah grabs the shift lever.

        DETAIL - SHIFTER, as she slams it into reverse.

                                               CUT TO:


149     EXT. STREET/CARS - NIGHT                               149

        MOVING WITH BOTH CARS as the Buick skids with rear tires
        locked.  Reese and Terminator FIRE simultaneously.

        TIGHT ON REESE as the doorpost next to his shoulder is
        torn out by the other's blast.

        ON TERMINATOR, leaning to see around his shattered wind-
        shield.  Too late.
        He hurtles into the intersection, past the skidding Buick.
        Clips the back of the semi.
        Spins radically.
        Vaults the curb in a screeching front-end roll.

        WHIP-PANNING WITH THE CRUISER as it crashes upside-down
        through the counter area of an A & W.

        LOW ANGLE as Reese and Sarah slide to a stop in a cloud
        of tire smoke.
        Transmission fluid pours out of the car like blood.
        An instant later they are surrounded by an assortment of
        LAPD, SHERIFF'S DEPT., and CHP CARS.
        The helicopter hovers overhead.

        MEDIUM ON SARAH AND REESE, he raises his hands, through
        the side window, in plain sight. A phalanx of cops, guns
        drawn, approaches the car warily.

        Sarah looks at Reese.  Then at the cops.  She opens the door
        and runs, staggering, toward them.  Vukovich steps forward
        and pulls her away to safety.

        C.U. - REESE watching her go as a cop eases his door open.

                                               CUT TO:


150     EXT. A & W - NIGHT                                     150

        Two cops approach the overturned squad car jammed into the
        wreckage of the small building.
        They shine their flashlights inside.
        It is empty.

        The cyborg has VANISHED.

        A sign which reads 'DRIVE IN' detaches from an awning and
        crashed down across the crushed auto.

                                               CUT TO:


151     INT. VUKOVICH'S OFFICE - NIGHT                         151

        Sarah, huddles in a blanket, is siting on a bench opposite
        Vukovich's desk.  Motionless.  Her eyes are fixed on the
        middle distance.  She's been crying.  Now she's emptied out.

        The door opens.
        At the sound of the latch Sarah jerks as if struck, and cringes
        involuntarily.  Vukovich enters with Traxler and DR. PETER
        SILBERMAN, a criminal psychologist.  Silberman is smooth
        of skin and manner, young, ambitious and...fat.  He is
        enthusiastic about the workings of the human psyche, as
        emotionally involved as someone pulling the wings off a fly.

        Vukovich sits beside Sarah and hands her a cup of coffee.
        He puts a paternal arm around her shoulders.

                                VUKOVICH
                     Here, drink some of this...

                                SARAH
                           (voice flat,
                           desperate)
                     Lieutenant, are you sure it's
                     them?  Maybe I should see the
                     ...bodies.

                                VUKOVICH
                     They've already been identi-
                     fied.  There's no doubt.

        Sarah  begins to cry again, slowly and very quickly.

                                SARAH
                           (to herself)
                     Of, God...Ginger...kiddo,
                     I'm so sorry.

        Vukovich takes the coffee cup from her as her arms sag and
        it starts to spill.

                                VUKOVICH
                           (gently)
                     Sarah.
                           (pause)
                     Sarah, this is Dr. Silber-
                     man.  I'd like you to tell
                     him everything Reese said
                     to you.  Do you feel up to it?

                                SARAH
                           (almost in-
                           audible)
                     I guess so.
                           (to Silberman)
                     You're a doctor?

                                SILBERMAN
                     A criminal psychologist.

                                SARAH
                     Is Reese crazy?

                                SILBERMAN
                     That's what we're going to
                     find out.

                                               CUT TO:


152     INT. HOTEL ROOM - NIGHT                                152

        The room costs five dollars a night and that's steep, but
        the FIRE ESCAPE outside the window adds an element of
        strategic value.
        A silhouette slips in through the window and click on the
        single BARE LIGHT BULB.
        It's Terminator, and he's a mess.
        A bloody scarecrow with bullet wounds in stomach, chest,
        shoulder and right wrist.

        MEDIUM ON TERMINATOR as he sits at a ratty folding table
        under the light.
        His eyebrows are singed off.
        Hair a charred stubble.
        Left eyes glistening with imbedded glass shards.

        Before him on the table is an array of SMALL TOOLS.
        He removes the charred remains of his jacket and props.
        one elbow on the table.

        ANGLE PAST HIS NON-FUNCTIONAL RIGHT ARM, F.G., as he exam-
        ines it.  He picks up an X-ACTO KNIFE and cuts deeply into
        the skin of his forearm.
        His expression is one of mild concentration.

        E.C.U. - FOREARM, as he pulls back a large flap of skin to
        reveal a complex trunk of SHEATHED CABLES AND HYDRAULICS.
        They slide as he moves his fingers.

        RESUME MEDIUM, as Terminator uses a rag to wipe away the
        blood.  With small screwdrivers he begins to patiently dis-
        assemble the damaged mechanism around the 12-guage hit.

                                               CUT TO:


153     INT. DIVISION HQ/INTERROGATION ROOM - NIGHT            153

        The room is small, furnished with only a table and two chairs.
        Reese, his arms handcuffed behind him, sits opposite Dr.
        Silberman.  Behind Silberman is a large mirror.  A DETECTIVE
        leans against the wall.

                                SILBERMAN
                     So.  You're a soldier.
                     Fighting for whom?

                                REESE
                     With the One Thirty Second
                     under Perry, from '21 to '27--

                                SILBERMAN
                           (interrupting)
                     The year 2027?

                                               CUT TO:


154     INT. OBSERVATION ROOM                                  154

        Vukovich and Traxler are seated in the dark room, watching
        Reese, B.G., through the two-way mirror.  Just behind the
        glass is a VIDEO CAMERA ON A TRIPOD, aimed at Reese, and
        a CART holding a SMALL MONITOR and VIDEOCASSETTE RECORDER.

                                REESE
                           (through speaker)
                     That's right.

                                TRAXLER
                           (quietly, to
                           Vukovich)
                     This is fucking great.

                                               CUT TO:


155     INT. INTERROGATION ROOM                                155

                                REESE
                     Then I was assigned Recon/
                     Security, last two years,
                     under John Connor.

                                SILBERMAN
                     And who was the enemy?

                                REESE
                     SKYNET.  A computer defense system
                     built for SAC-NORAD by Cyber
                     Dynamics.  A modified Series
                     4800.

                                SILBERMAN
                           (gravely)
                     I see.  And this...computer,
                     thinks it can win by killing
                     the mother of its enemy, kill-
                     ing him, in effect, before he
                     is even conceived?  A sort of
                     retroactive abortion?

                                REESE
                     Yes.

                                               CUT TO:



156     INT. OBSERVATION ROOM                                  156

        Traxler snorts and grins.

                                TRAXLER
                           (to Vukovich)
                     That Silberman just crack me up.
                           (pause)
                     He had this guy in here last week
                     who set his Afghan on fire.
                     Screwed it first, then set it on--

                                VUKOVICH
                           (leaning forward)
                     Shut up.

                                               CUT TO:


157     INT. INTERROGATION ROOM

                                REESE
                      ...it had no choice.
                      The defensive grid was
                      smashed. We'd taken the
                      mainframes...
                      We'd won.  Taking out
                      Connor then would make no
                      difference.  Skynet had to
                      wipe out his entire exist-
                      ence.  We captured the lab
                      complex.  Found the...what-
                      ever it was called...the
                      time-displacement equipment.
                      The Terminator had already
                      gone through.  They sent two
                      of us to intercept, then
                      zeroed the whole place.
                      Sumner didn't make it.

                                SILBERMAN
                      Then how are you supposed to
                      get back?

                                REESE
                      Can't.  Nobody goes home.
                      Nobody else comes through.
                      It's just him and me.

                                               CUT TO:


158     INT. HOTEL ROOM - NIGHT

        E.C.U. - TERMINATOR, in profile, showing his lacerated eye.
        He is close to a mirror, practically touching it, staring
        intently.

        MACRO - X-ACTO KNIFE lying on the dresser.  Terminator's
        fingers lift it.  CAMERA TILTS TO FOLLOW as it rises to
        his face, holds TIGHT ON left eye.
        With a smooth motion the knife point enters the eyeball
        and cuts away the ruins sclera and cornea, as well as part
        of the damaged eyelids.

        He wipes with a rag to clear the electronic eye's vision.
        Revealing the faintly glowing lens mechanism, suspended in
        a chrome socket by tiny servos.
        The eye whirs quietly as it tracks.

        SEQUENCE OF SHOTS, showing various repairs.
        Terminator's right hand, its wrist SUTURED crudely, holds
        a needle and sewing thread and starts to work on abdominal
        wound out of frame below.
        He slips a glove over the damaged hand.
        A motoring cap over the blistered scalp.

        A fresh shirt to hide his body wounds.
        This is followed by a new overcoat.

        C.U. - TERMINATOR, contemplating his reflection in the
        mirror.  With the hat pulled down, the collar pulled up,
        and favoring his right profile he looks unhurt...though
        a bit gaunt and pale.

        A turn of his head brings the balefully glowing left eye
        in its metal socket into view.
        He slips on a pair of tight, wrap-around sunglasses.

        FULL SHOT as he goes to the bed and flips up the stained
        mattress.  He picks up the Remington 12 gauge, the AR-180
        and the .38 off the springs and leaves by the fire escape.

                                               CUT TO:


159     INT. VUKOVICH'S OFFICE - NIGHT                         159

        TIGHT ON VIDEO MONITOR showing Reese in the Interrogation
        Room.

                                REESE
                           (recorded)
                      ...It's just him and me.

        CUT WIDE revealing Sarah, Silberman, Vukovich and Traxler
        watching a monitor sitting amid incredible paperwork clutter
        on a desk top.

                                SILBERMAN
                           (recorded)
                      Why didn't you bring any
                      weapons?  Something more
                      advanced.  Don't you have
                      ray guns?

        Traxler, standing in the back, grins and nudges Silberman,
        who nods appreciatively.

        TIGHT ON REESE'S RECORDED IMAGE - He glares at Silberman.

        ON SARAH, as Silberman's voice is heard.

                                SILBERMAN
                           (recorded)
                      Show me a piece of future
                      technology.

                                REESE
                           (recorded/con-
                           trolling his
                           hostility)
                      You go naked.  Something about
                      the field generated by a living
                      organism.  Nothing dead will go.

                                SILBERMAN
                           (recorded)
                      Why?

                                REESE
                           (recorded)
                      I didn't build the fucking
                      thing.

                                SILBERMAN
                           (recorded)
                      Okay.  Okay.  But this...
                           (consults his
                           notes)
                      cyborg...if it's metal...

                                REESE
                           (recorded)
                      Surrounded by living tissue.

                                SILBERMAN
                           (recorded)
                      Of course.

        The real Silberman put the tape on "PAUSE".

                                SILBERMAN
                           (excited)
                      This is great stuff.  I could
                      make a career out of this guy.
                      You see how clever this part
                      is...how it doesn't require a
                      shred of proof.  Most paranoid
                      delusions are intricate...but
                      this is brilliant.

        He starts the tape again.

                                SILBERMAN
                           (recorded)
                      Why were the other two women
                      killed?

                                REESE
                           (recorded)
                      Most official records were
                      lost in the war.  The computer
                      knew almost nothing about
                      Connor's mother.  Her name.
                      Where she lived, just the city.
                      No scanner pictures.  The
                      Terminator was just being
                      systematic.

        C.U. - REESE, ON SCREEN, as he goes on.

                                REESE
                           (recorded, con-
                           tinuing)
                      You've heard enough.  Decide.
                      Are you going to release me?

                                SILBERMAN
                           (recorded)
                      I'm afraid that's not up
                      to me.

                                REESE
                           (recorded/voice
                           rising)
                      Then why am I talking to you?
                      Get out.

        ON SARAH, DOLLYING SLOWLY IN TO C.U. as we hear Reese
        begin to shout.

                                SILBERMAN
                           (recorded)
                      I can help you...

                                REESE
                      Who is in authority here?

        C.U. REESE, ON SCREEN, as he looks straight at the camera.

                                REESE
                           (recorded)
                      You still don't get it.
                      He'll find her.  That's
                      what he does.  All he does...

        MEDIUM ON VUKOVICH, gesturing to Silberman, who is near the
        machine, to kill it.

                                REESE
                           (recorded, con-
                           tinuing)
                      You can't stop him. He'll
                      wade through you...

        C.U. - REESE, ON SCREEN, rising partway out of his chair,
        yelling.

                                REESE
                           (recorded, continuing)
                      ...reach down her throat, and
                      pull her fucking heart out...

        The screen goes black.
        Vukovich has cut off the tape.

                                SILBERMAN
                           (glancing around)
                      Sorry.

        C.U. - SARAH staring at the empty screen.

                                SARAH
                           (turning)
                      So Reese is crazy.

                                SILBERMAN
                      In technical terminology,
                      he's a loon.

                                SARAH
                      But...

        Vukovich hands her something that looks like umpire's
        padding.

                                VUKOVICH
                      Sarah, this is body armor.
                      Out TAC guys wear it.  It'll
                      stop a 12 gauge round.  This
                      other individual must've had
                      one under his coat.

        Sarah want to believe him.  God help her if he's wrong.

                                SARAH
                      But what about him punching
                      through the windshield?

                                TRAXLER
                           (shrugs)
                      Probably on PCP, broke every
                      bone in his hand and won't feel
                      it for hours.  There was this
                      guy once that...

        Vukovich cuts him off with a gesture and sits beside Sarah
        on the bench.

                                VUKOVICH
                      Why don't you just stretch out
                      here and get some sleep.  It'll
                      take your mom a good hour to get
                      here from Redlands.

                                SARAH
                      I can't sleep.

                                VUKOVICH
                      Go ahead.  You're safe.  There're
                      thirty cops in this building.

                                SARAH
                      Okay.

        She lays her head on a wadded up blanket as everyone
        leaves the office.

                                               CUT TO:


159A    INT. CORRIDOR

        Vukovich pauses outside the door, lost in thought.  Traxler
        studies him for a second.

                                TRAXLER
                      What?
                           (pause)
                      Ed, come on...the guy's a
                      wacko.

        Vukovich glances up.

                                VUKOVICH
                           (quietly)
                      He'd better be.

                                               CUT TO:


160     INT. POLICE DEPARTMENT FOYER - NIGHT                   160

        Silberman can be seen through a glass partition next to
        the bullet-proof glass booth enclosing the NIGHT DESK
        SERGEANT'S counter.  The Sergeant hits a button and there
        is a loud BULL-CLACK.  The electric bolt on the security
        door opens and Silberman steps out.

        As he exits the station, he passes Terminator just coming in
        the front door.  He glances at the pale apparition in cap
        and dark wrap-arounds, but goes on.
        Terminator approaches the Desk Sergeant who barely glances
        up when he speaks.

                                TERMINATOR
                      I'm a friend of Sarah Connor.
                      I was told she is here.  Can
                      I see her, please?

                                SERGEANT
                      You can't see here.  She's
                      making a statement.

                                TERMINATOR
                      Where is she?

                                SERGEANT
                           (laconically)
                      Look.  It's gonna be a while.
                      You wanna wait.  There's a
                      bench.

        Terminator steps back, scanning the booth, the electric
        door, the rooms beyond.

                                TERMINATOR
                      I'll come back.

        He turns and walks out through the front doors.

        ANGLE PAST DESK SERGEANT, F.G. - ON FRONT DOORS, the officer
        is absorbed in paperwork, not watching as a pair of lights
        get BRIGHTER outside the doors.  RAPIDLY.  He glances up
        at the last second as the glare falls fully on him.  CRASH!
        Several cops and late night loiterers scatter as a car
        smashes into the foyer.  It blasts through the sergeant's
        booth, crushing him in the wreckage.

                                               CUT TO:


161     INT. DIVISION HQ/VUKOVICH'S OFFICE                     161

        Sarah, lying on the couch, jerks awake as the crash
        REVERBERATES through the building.  She sits up, bleary-
        eyes.

                                               CUT TO:


162     INT. DIVISION HQ/CORRIDOR                              162

        Through the hole in the splintered wall we see Terminator
        leap out of the car.
        He vaults the hood and smashes through the debris of the
        wall.
        Leaps to the corridor floor in a shower of plaster fragments.
        He brandishes the AR-180 like a pistol in one hand, the
        .38 in the other.
        The shotgun dangles at his side on a shoulder sling.

        LOW ANGLE DOLLY, preceding him as he starts down the
        corridor.

        ANGLE ON LOUNGE DOORWAY as TWO COPS run into the hall,
        one carrying a cup of coffee.
        Terminator fires a burst from the assault rifle.

        ANGLE ON COPS - They are flung backward in a spray of
        coffee and plaster.

                                               CUT TO:


163     INT. DIVISION HQ/VUKOVICH'S OFFICE

        Sarah is alert now with growing alarm.  The sound of
        GUNFIRE is faint...but unmistakable.  Her expression
        shows the dawning certainty of what is happening.

                                               CUT TO:


164     INT. DIVISION HQ/CORRIDOR                              164

        Terminator steps over the bodies of the two cops without
        breaking stride.

        OVER HIS SHOULDER, MOVING WITH HIM as he walks down the
        hall.  Comes to a door.  Tries it.  Locked.
        Kicks it in.
        A DESK COP, drawing his gun, sprints for cover.

        ANGLE ON TERMINATOR raising the AR-180.

                                               CUT TO:


165/FX  INT. DIVISION HQ/OFFICE - TERMINATOR'S POV             165/FX

        In computer-enhanced vision we see the cop dash around a
        corner in SLOW MOTION.  As he disappears behind the wall
        an ANIMATED OUTLINE OF HIM is still visible...a PROBABILISTIC
        EXTRAPOLATION OF HIS MOTION.  There is a target cross-
        hair following the figure.

                                               CUT TO:


166     INT. DIVISION HQ/OFFICE - BEHIND WALL                  166

        The wall erupts with a volley of shots beside the running
        cop and he is flung OUT OF FRAME.

                                               CUT TO:


167     INT. VUKOVICH'S OFFICE                                 167

        Shots are echoing in the hallway as Vukovich whips open
        the door, startling the hell out of Sarah.

                                VUKOVICH
                      Stay here.

        He turns the locking knob and slams the door.
        Leaving her alone.
        She flinches as more SHOTS SOUND.  CLOSER.

                                               CUT TO:


167A    INT. CORRIDOR                                          167A

        Terminator rips the cover off the station's main electrical
        panel.  He pulls loose the hose-like 440 volt
        incoming line and feeds it directly into the lighting
        circuit.

        All down the corridor the overhead fluorescent units
        explode, showering sparks and glass.

        The building is plunged into darkness.

        Arcs SPUTTER and FLARE, lighting the corridors strobo-
        scopically.

                                               CUT TO:


167B    INT. VUKOVICH'S OFFICE                                 167B

        Sarah's terror skyrockets when the ceiling lamp explodes
        and the office goes black.

                                               CUT TO:


168     INT. CORRIDOR                                          168

        Through the smoke and emergency spotlights Terminator moves
        forward, inexorably.
        A door behind him opens.  A COP fires, hitting him in
        the shoulder.  Terminator fires straight-arm with the .38
        without slowing, killing the cop, then fires down the
        corridor with the assault rifle.

                                               CUT TO:


169     INT. INTERROGATION ROOM                                169

        Traxler leaves the other detective to guard Reese, who is
        still handcuffed to the chair.

                                TRAXLER
                          (exciting)
                     Watch him.

        The door closes.

        An instant later a chair smashes over the detective's
        back, just as he is turning toward his prisoner.
        Reese is on him, scrabbling for the keys.

                                               CUT TO:


170     INT. CROSS CORRIDOR                                    170

        Traxler is running down the hall through smoke and the
        wild strobing of electrical fires as Vukovich steps
        out of an armory room.  He tosses Traxler an M-16 and
        they run on.

                                               CUT TO:


171     INT. MAIN CORRIDOR                                     171

        Terminator stops before another door.  He BLASTS the lock
        with the riot-gun.  Flings open the door, scanning.
        Moves on.
        He is hit twice, chest and leg.
        Firelight flickers from an office doorway as he passes.

                                               CUT TO:


172     INT. VUKOVICH'S OFFICE                                 172

        Sarah scrabbles for a place to hide in the darkened room
        but it's so tiny.  Behind the desk.  She crouches unable to
        believe she has awakened into the same nightmare.

                                               CUT TO:


173     INT. OFFICE NEARBY                                     173

        ANGLE ON DOOR as it splinters open and Terminator stands,
        guns raised.  A COP fires from behind a desk.
        Terminator sprays the room.
        Starts to reload.

                                               CUT TO:


174     INT. CORRIDOR

        Vukovich edges open a door and fires half a clip into
        Terminator's back.  His eyes  bulge as the intruder turns,
        slamming a clip into his rifle and calmly fires two rounds.
        Traxler drags Vukovich's body back inside the room.

                                TRAXLER
                      Ed!  Ed...?

                                               CUT TO:


175     INT. CORRIDOR                                          175

        TIGHT ON TERMINATOR, moving forward, intent

                                               CUT TO:


176     INT. VUKOVICH'S OFFICE                                 176

        MEDIUM ON SARAH, her teeth are chattering with fear as
        SHOTS echo nearby.  There is the RHYTHMIC THUNDER of the
        shotgun, rattling AUTOMATIC FIRE, SCREAMING, and the sound
        of RUNNING FEET.  Getting closer.

        SLOW DOLLY IN ON SARAH begins, ending in TIGHT C.U. as the
        sounds get louder.  More SHOTS.
        Smoke begins to seep under the door.

        DETAIL - DOORKNOB rattling as it is tried from outside.

        E.C.U. - SARAH stifling a cry.  She flinches as if slapped
        as SHOTS sound.

        DETAIL - DOOR KNOB, a series of SHOTS shatter the lock.

        FULL ON DOORWAY - The door bangs open and a figure stands
        silhouetted in the smoky hallway, holding a pistol.

        E.C.U. - SARAH, as she closes her eyes.  Holds her breath.

                                REESE (V.O.)
                      Sarah?

        FULL SHOT - She scrambles out from beneath the desk and runs
        to him in the thickening smoke.

                                               CUT TO:


177     CONNECTING OFFICES                                     177

        PANAGLIDE FOLLOWING REESE AND SARAH as they cross the
        corridor and move through a series of offices, doubling back
        toward the main entrance.

                                               CUT TO:


178     INT. OFFICE                                            178

        Sarah and Reese move rapidly through the smoke.
        Gunfire sounds nearby.  They pass bodies.

                                VUKOVICH (V.O.)
                           (weakly)
                     Reese!

        They find the Lieutenant propped in a corner, dying.
        Reese bends toward him.
        Vukovich holds out his custom Colt Python .357.

                                VUKOVICH
                           (continuing)
                     You just keep her alive.  Do
                     what you have to.

        Reese snatches the gun and the keys and runs on.

        C.U. - VUKOVICH watching them go.

                                               CUT TO:


179     INT./EXT. OFFICES/SIDE ENTRANCE - NIGHT                179

        FAST PANAGLIDE PRECEDING TERMINATOR as he runs through
        the smoky rooms.  A fire is burning, lighting everything
        a flickering orange.
        He emerges onto a landing through a side entrance.  PAN
        to follow his line of sight as he snaps the AR-180 to
        his shoulder.  B.G. a BLUE VOLKSWAGEN RABBIT is roaring
        away across the parking lot.

        TIGHT ON TERMINATOR aiming carefully.  He pulls the trigger.
        It clicks...empty.  Slowly he lowers the scope-sight from
        his eye and watches them go.

        Terminator limps down the steps from the landing and walks
        away as the fire spreads behind the windows of Division
        Headquarters.

                                               CUT TO:


180     INT. RABBIT - NIGHT                                    180

        DETAIL - GAS GAUGE, it reads EMPTY.

                                               CUT TO:


181     EXT. HIGHWAY - NIGHT                                   181

        The Rabbit is stopped on the shoulder of a two lane
        secondary road winding through the hills north of L.A.
        Reese is fishing objects out of the car's trunk and
        handing them to Sarah, who holds a flashlight.
        He hands her a blanket, some road flares, and a first
        aid kit.  Then he slams the trunk.  Reaching through the
        side window, he turns the wheel and pushes the car off
        the shoulder, over the embankment.

        DOWN ANGLE INTO RAVINE, past Sarah and Reese, as the car
        trundles down crashing through the underbrush to dis-
        appear among the trees.

        Reese looks out across the valley and the lights of L.A.
        A helicopter circles in the distance, searchlight on.

                                REESE
                     Let's get off the road.

                                               CUT TO:


182     INT./EXT. DRAINAGE CULVERT - NIGHT                     182

        ANGLE LOOKING OUT from the mouth of an enclosed concrete
        storm drain that passes under the road.  Reese, followed
        by Sarah, trudges down the slope and ducks inside.
        The floor is wet but he doesn't seem to mind.
        They both hunker down with their backs to the concrete,
        facing each other.
        They look beaten, grimy, exhausted.
        She huddles under the blanket, waif-like.

                                REESE
                      You cold?

                                SARAH
                      Freezing.

                                REESE
                      Come here.

        She sits beside him and they wrap their arms around each
        other with the blanket covering both of them.

                                SARAH
                      Reese...you got a first name?

                                REESE
                      Kyle.

                                SARAH
                      Kyle, what's it like when you
                      go through time?

                                REESE
                      White light.  Pain.  Like
                      being ripped inside out...
                      slowly.  Like being born,
                      maybe.

        Sarah scowls and draws her hand out from under his jacket.

                                SARAH
                      You're wet.  Oh my god.

        In the beam of the flashlight her hand is glistening
        with blood.

                                REESE
                      I caught one, back there.

                                SARAH
                           (incredulous)
                      Caught one?  You mean you
                      got shot?

        Reese shrugs.

                                REESE
                      It's not bad.

        Sarah sits up and turns toward him.

                                SARAH
                      We gotta get you to a doctor.

                                REESE
                      It's okay.  Forget it.

                                SARAH
                      Forget it?  Are you crazy?
                      Let me see it.

        Sarah opens his jacket and the flashlight beam shows his
        shirt bloodsoaked at the shoulder.

                                SARAH
                           (continuing)
                      Jeez.  You idiot.  Take
                      this off.

        She cradles the flashlight between her knees and opens
        the first aid kit as he removes his jacket.

                                REESE
                           (looking at the
                           wound)
                      See.  Missed everything.
                      Passed through the meat.

        Sarah starts swabbing the flesh wound.

                                SARAH
                      This is gonna make me puke.
                      Talk about something.

                                REESE
                      What?

                                SARAH
                      Just talk.  Tell me about
                      my son.  Is he tall?

        She places a gauze pad in place and starts to wrap it.

                                REESE
                      About my height.  He
                      has your--
                           (winces)
                      ...damn...he has your
                      eyes.

        Sarah glances at his face for a second and then goes back
        to work.

                                SARAH
                      What's he like?

                                REESE
                           (thoughtful)
                      You trust him.  He's got that
                      strength.  You'd die in a
                      second for John.

                                SARAH
                      Well, at least I know what
                      to name him.  I don't suppose
                      you'd know who the father is?
                      So I don't tell him to get
                      lost when I meet him.

                                REESE
                      John never said much about
                      him.  He dies.  Even before
                      the war...

                                SARAH
                           (interrupting)
                      Stop!  I don't want to know.
                      Hold still.  So...it was John
                      that ordered you here?

                                REESE
                      I volunteered.

                                SARAH
                      You volunteered?

                                REESE
                      It was an honor.  A chance
                      to meet the legend.  Sarah
                      Connor.  Who taught her son
                      to fight...organize, prepare.
                      From when he was a kid.  When
                      you were in hiding, before
                      the war.

        She stops taping.  She seems lost, her bravado dissipated.

                                SARAH
                      You talk about things I haven't
                      done yet in the past tense.  It's
                      making me crazy.  I can't think.
                           (pause)
                      Are you sure you've got the
                      right person?

        Reese appraises her coldly.

                                REESE
                      I'm sure.

                                SARAH
                      Come on, me? The mother
                      of the future?  Am I tough?
                      Organized?  I can't even balance
                      my checkbook.  I cry when I see
                      a cat that's been run over...
                      and I don't even like cats.

        She pulls the bandage tight with a knot.

                                REESE
                      Ow!  No, it's okay.  It's
                      better tight.

                                SARAH
                      And anyway, what do I know
                      about guerrilla warfare?

                                REESE
                      You'll learn.

                                SARAH
                           (angry)
                      Look, Reese, I didn't ask for
                      this honor and I don't want it.
                      Any of it.

                                REESE
                      John gave me a message for
                      you.  Made me memorize it.
                      'Sarah"...this is the message...
                      'Sarah, thank you.  For your
                      courage through the dark years.
                      I can't help you with what you
                      must soon face, except to tell
                      you that the future is not set...
                      there is no such thing as Fate,
                      but what we make for ourselves
                      by our own will.  You must be
                      stronger than you imagine you
                      can be.  You must survive, or I
                      will never exist.'  That's all.

        Sarah stares at him as the enormity of it all becomes real
        to her.  Reese moves his arm, testing the bandage.

                                REESE
                           (continuing)
                      Good field-dressing.

                                SARAH
                           (brightening)
                      You like it?  It's my first.

        He rebuttons his shirt and they return to the warmth-
        conserving embrace.  Sarah gazes out the entrance, into
        the night.

                                REESE
                      Sleep.  It'll be light soon.

                                SARAH
                           (closing her
                           eyes)
                      Okay.  Talk some more.

                                REESE
                      About what?

                                SARAH
                           (murmuring)
                      About where you're from.

        Kyle watches the helicopter circling far in the distance.

                                REESE
                      Alright.
                           (pause)
                      You stay down by day, but at
                      night you can move around.
                      The H-K's use infra-red so you
                      still have to watch out.
                      But they're not too bright.
                      John taught us ways to dust them
                      them.  That's when the infiltra-
                      tors started to appear.  The
                      Terminators were the newest,
                      the worst...

        During his monologue we have PANNED into the darkness outside
        and to the helicopter, which flies OUT OF FRAME, leaving
        black.  A ROTOR ROAR fades up.

                                               CUT IN BLACK TO:


183/FX  EXT. CITY RUINS, 2029 - NIGHT                          183/FX

        Black sky.  Stars.
        With a roar an AERIAL PATROL CRAFT enters close overhead.
        It has flashing red and blue lights and powerful search-
        lights which stab down.

        TILT DOWN

        to a vista of moonlit devastation.
        White ash blows in drifts among fire-gutted ruins.
        Blackened bones lie everywhere in heaps.
        Searchlights sweep the night.
        Another aerial unit hovers several blocks away, firing
        tracers into the ruins.

                                               CUT TO:


184/FX  EXT. RUINS/STREET - NIGHT                              184/FX

        LOW ANGLE

        as a gleaming chrome H-K grinds through the debris of the
        shattered street on its tank-like tracks, crushing burnt
        skulls.
        Its head turns slowly, playing high-intensity lights over the
        buildings.
        Its hydraulic arms are folded, mantis-like, against its
        'torso'.  After it passes a number of human figures dart
        from shadow to shadow, B.G.

                                               CUT TO:


185     INT. TUNNELS - NIGHT                                   185

        Reese is among a SQUAD OF MEN in black fatigues, carrying
        equipment and energy rifles, who enter a debris-littered
        tunnel.

        PANAGLIDE WITH THEM as they trot through a labyrinth of
        tunnels, pass several guard-posts.  Reese has a GERMAN
        SHEPHERD on a short leash.

                                               CUT TO:


186     INT. PARKING STRUCTURE - NIGHT                         186

        The platoon enters a cavernous chamber, an old parking
        structure, in which a large group is gathering.
        As the entrance, ARMED SENTRIES with dogs are passing in
        new arrivals: men wearing mismatched uniforms or rags and
        carrying all types of weapons from lasers to shotguns.
        Weapons are left at the sentry post.

        FOLLOWING REESE as he patrols the perimeter.
        He walks along a row of CARS, models from the eighties and
        nineties, now stripped, rusty and modified to carry weapons.
        There are conventional military vehicles as well.
        He passes several family groups.
        Gaunt kids are huddles around an old TV SET.
        Its glow bathes them.

        REVERSE ANGLE reveals that the set has been gutted and a
        small cookfire crackles inside the shell.
        Nearby a kid has a LARGE RAT cornered and is whacking it
        with a stick.

        Reese pauses at the end of the row of vehicles and unsnaps
        a pocket in his tunic, removing a small paper rectangle,
        a worn photograph.

        C.U. - REESE, gazing down.  His head snaps around at the
        sudden sound of BARKING.

        ANGLE ON SENTRY POST as the dogs go crazy.

                                SENTRY
                           (shouting)
                      Terminator!

        An innocuous, RAG-DRESSED MAN flips back his poncho to
        reveal a powerful PLASMA-RIFLE.  He opens FIRE, running
        forward.  ENERGY BOLTS rip into the crowd.

        MOVING WITH REESE, running toward the Terminator.

        RAPID CUTS:

        POWERBOLTS EXPLODE among the fleeing people.
        Beams sear the darkness.
        A running CHILD is BURST by a plasma hit.

        ANGLE ON REESE running.  He levels his energy-rifle and
        starts firing.  A powerbolt grazes his cheek, EXPLODING
        a support column behind him.  Part of the ROOF COLLAPSES
        as Reese tumbles.

        Everything is lit as if by lightning.

        C.U. - REESE, semi-conscious.  Burned.  Bleeding.
        Impressions implode on him: running feet, flashes, energy
        beams raking the ground leaving molten worm-tracks, scream-
        ing, a burning dog howling.

        DETAIL - The picture Reese has been looking at has fallen,
        forgotten.  It catches fire and starts to curl.  Before
        the image vanishes we see that it is a picture of Sarah.

        Reese looks up.
        A figure looms above, a silhouette in the smoky, hellish
        glare.  THE TERMINATOR.  Its  eyes glow red.

        A brilliant EXPLOSION WHITES OUT THE SCREEN.

                                               CUT TO:


187     INT. CULVERT - DAWN                                    187

        C.U. - SARAH, brightly lit by daylight.  Asleep.  She grimaces
        and groans.
        In the distance a dog is barking.

        Reese, still holding her, lightly lifts her hair from her
        face.  An uncharacteristically tender gesture.  He gently
        caresses her cheek with the backs of his fingers.  When
        she awakens suddenly he snaps his hand away.

        Sarah looks around, momentarily disoriented.  Looks up at
        Reese.

                                SARAH
                      I was dreaming about dogs.

        Reese extricates himself from her and steps out of the
        culvert.

                                REESE
                      We used them to spot Terminators.

        Sarah groans as she straightens her legs.

                                SARAH
                      Your world...it's pretty
                      terrifying.

                                               CUT TO:


189     EXT. HIGHWAY - DAWN                                    189

        Sarah catches up to him just as he is about to try and
        stop an approaching car.  She pulls his gun hand down with
        both of hers.

                                SARAH
                      Put that away.  I'll get one.

        She hold out her thumb to passing traffic.
        Reese watches this incomprehensible ceremony skeptically.

                                SARAH
                           (continuing)
                      This works...really.

                                               CUT TO:


189A    EXT. HIGHWAY/PICKUP - DAY                              189A

        Reese and Sarah are crammed into the cab of a beat-to-hell
        PICKUP TRUCK with the DRIVER, obviously a surfer.  Laid-
        back, long-haired and well-tanned.
        Reese glowers and watches the scenery through slitted eyes.

                                DRIVER
                      ...and when it breaks right
                      off the point they get some
                      pretty rad tubes up there.
                      Not awesome, but I mean, worth
                      the drive, if you're hardcore
                      like me.

                                REESE
                           (to Sarah)
                      Rad tubes?

                                SARAH
                           (to Reese)
                      He's a surfer.

                                DRIVER
                      You from back East of
                      something?

                                SARAH
                      No, he's from the future.

                                DRIVER
                      Whoah.  I hear that.
                           (pause)
                      Listen, I had a rough
                      night.  I gotta stop and
                      bag some Z's.

        They pull off the highway toward a gas station/rest area.

                                               CUT TO:


190     EXT. SERVICE STATION - DAY                             190

        The gas station is like an oasis of clutter in a rolling
        stretch of meadows and woods.  It consists of a bunker-
        like building with restrooms and a flanking PICNIC AREA,
        beyond which are WOODS.
        People sit under the trees, enjoying the beautiful day
        while children tear around after the forced inactivity of
        a long trip.

        The three of them get out on unsteady legs.

                                DRIVER
                      You can still ride if
                      you wanna hang out for a
                      couple hours.

                                SARAH
                      Thanks.

                                REESE
                      Bag some Z's?

                                SARAH
                      Let's get cleaned up, Kyle.

        She heads for the WOMEN'S RESTROOM and Kyle follows her
        inside.

                                REESE
                           (pushing him out)
                      Yours is over there.

        Instead of following her directions to the Men's Room,
        Kyle wanders toward the drinking fountain.  A bunch of
        kids are running around and throwing water at each other
        with paper cups.

        Reese shambles through them like a zombie.
        He stands among the children, an alien in this land without
        fear.  He watches people at picnic tables laughing and
        listening to portable music.  Kids squeal.  Dogs bark.

                                LITTLE GIRL (V.O.)
                      Can you get my balloon?

        DOWN ANGLE on an achingly beautiful LITTLE GIRL of about
        four.  She points above his head.

        Reese looks up to see a helium-filled mylar balloon stuck in
        the foliage of a tree just above him.  He pulls it down by
        the string and holds it, turning it over dully.

        He crouches down to her eye-level.  She smiles.

                                REESE
                      Aren't you afraid to be out in
                      the open like this?

                                LITTLE GIRL
                      Huh?

        Reese whirls reflexively at a SCREAM behind him.  The
        mylar balloon bursts in his tense hands.  A teenage girl
        is being doused with water by the boys with plastic jugs.

        The little girl looks at the broken balloon, then glares
        at Reese.  She punches him soundly on the shoulder and
        storms off.

        At this moment she is bowled over by an IRISH SETTER that
        licks her face while she shrieks with laughter.
        Reese seems about to smile but doesn't quite know how to
        go about it.

                                               CUT TO:


191     EXT. SERVICE STATION/PAY PHONE - DAY                   191

        Sarah is talking on an open pay phone.

                                SARAH
                      ...I know, Mom.  This is the
                      soonest I could...I know.
                      Mom...Mom, I can't talk long.
                      No, I'm okay.
                           (pause)
                      I was on TV?  Really?
                           (pause)
                      Oh no, I hate that picture...
                      why didn't you give them my
                      graduation picture?
                           (pause)
                      I'm okay, really.  Listen, I
                      want you to pack some stuff
                      and go up to the cabin for a
                      few days.  Just don't...no,
                      don't ask any questions.
                      Just do it.  I gotta get
                      going...gotta go.  Bye, bye.

        Sarah has been idly leafing through the DIRECTORY.  On
        a whim she looks up something.
        She freezes for a moment when she finds the listing.
        Then with a triumphant expression she rips the page out
        of the book.
                                               CUT TO:


192     EXT. SERVICE STATION/PICNIC TABLE - DAY                192

        Sarah is sitting at a table under a tree, lettering
        something with a lipstick on a cardboard box-flap.

        E.C.U. - SIGN, as the last letters are finished.
        It reads:
        SILICON VALLEY

        FULL ON SARAH as she retracts the lipstick and leans
        across to hand it to a girl at the next table.

                                SARAH
                      Thanks a lot.

                                REESE (V.O.)
                      What's that?

        Sarah looks up, startled to see him standing beside her.

                                SARAH
                      That's where we're going.

                                REESE
                      Why?

        Sarah point to the directory page lying on the table.

        MACRO - PAGE

        Sarah's finger points to a listing which reads:

        CYBER DYNAMICS CORPORATION
        18144 El Camino Real, S'Vale

        ANGLE ON SARAH AND REESE

        She looks smug.

                                SARAH
                      Look.  I found it.  Isn't
                      that it?  Cyber Dynamics
                      Corporation?

                                REESE
                      What about it?

                                SARAH
                      Didn't you say that they're
                      going to develop this
                      revolutionary new thing...

                                REESE
                      Molecular-memory.

                                SARAH
                      Whatever...they become the
                      hotshot computer guys so they
                      get the job to build El Computer
                      Grande...Skynet...for the
                      government.  Right?

                                REESE
                           (uneasy)
                      That's the way it was told
                      to me.

        Sarah's fear has been replaced by excitement.

                                SARAH
                      Well, we're gonna uninvent the
                      bastard.  Eighty-six it.  We'll
                      blow up the place...burn it
                      down.  Something.

                                REESE
                           (very cold)
                      Tactically dangerous.  We
                      lay low.

                                SARAH
                      Reese.  Think it through.
                      We can prevent the war.
                      Nobody else is gonna do it.
                      If we go to anybody official
                      we wind up back in jail and
                      then that walking cuisinart
                      has got us again.  We have to
                      so it ourselves.

                                REESE
                      That's not my mission.

                                SARAH
                           (upset, mocking
                           his manner)
                      Listen.  Understand.  I'm
                      not a military objective,
                      Reese.  I'm a person...
                      You don't own me.

        Reese takes her arm and pulls her to her feet.

                                REESE
                      Let's go.  Time to move out.

                                SARAH
                      Fuck you!  Let go of me!

        She jerks her arm free.  He reaches for her again but
        she outdistances him, running.

                                REESE
                           (warning tone)
                      Sarah!

        She dashes down a footpath among the trees, clutching her
        sign.  Reese follows her into the woods.

                                               CUT TO:


193     EXT. WOODS/CLEARING - DAY                              193

        Only a few yards from the picnic area, the woods take over
        completely.

        PANNING WITH SARAH

        as she runs down the path.
        Reese tackles her from behind and they fall together in
        the long spring grass.
        She struggles violently to get away.

                                SARAH
                      Let...go...bastard...

        She gets one arm free and whacks him hard in the face.
        Reese reacts instinctively, leaping back in a defensive
        crouch.  Sarah freezes when she sees the .357 in his
        hand.

                                SARAH
                           (continuing,
                           scared, but
                           angry)
                      Oh, that's real smart.
                      Go on, shoot me. That's
                      brilliant.

        Reese is trembling as he lowers the gun.
        Sarah too is shaking with emotion.  Tears roll down her
        cheeks and her voice cracks.

                                SARAH
                           (continuing)
                      Jesus Christ, Reese.  Can't
                      you see I'm scared?

        He straightens up and his arms go limp at his sides.
        He turns away.

                                SARAH
                           (continuing)
                      I can't spend my life waiting
                      for that thing to catch up
                      with me...always looking over
                      my shoulder, wondering if I
                      left some tiny clue behind...

        Reese doesn't respond.
        The gun slips from his fingers.
        His will seems to drain from him and he sags to his knees.
        The moment stretches.
        There is only the sunlight moving in shafts through the
        leaves, the sound of a small stream nearby, birds chirping.

                                SARAH
                      Reese?

        She crawls over to him.

        C.U. - REESE

        in profile, with Sarah in B.G.
        His eyes are closed.
        A tear meanders down his cheek.

                                SARAH
                           (continuing,
                           quietly)
                      Kyle?

                                REESE
                           (a whisper)
                      I'm wrong here.  I wasn't
                      meant to see this...

        He gestures at their surroundings.

                                REESE
                           (continuing)
                      It's...like some dream.
                      This...this...

        He touches the grass, the trunk of a tree.

                                REESE
                           (continuing)
                      ...and you...all so...beauti-
                      ful.  It hurts, Sarah.  More
                      than death.

        He looks are her beseechingly.

                                REESE
                           (continuing)
                      Don't you understand...it's
                      all gone!

        Sarah puts her arm around him.
        She sniffs and wipes at her nose with the back of her hand.

                                SARAH
                      We can change it, Kyle.  We
                      have to try.

        She takes his shoulder in her hands.

                                SARAH
                           (continuing)
                      There's no fate but what we
                      make for ourselves. Right?
                      Come on.  Let's go, kiddo.
                      Whaddya say?

        He picks up her sign and they look at each other for a
        second, then get up.

                                               CUT TO:


194     INT. TERMINATOR'S HOTEL ROOM - DAY                     194

        Terminator sits in his room with the blinds drawn tight.
        Murky.  Claustrophobic.  With knife-slits of hot sunlight.

        MEDIUM ON TERMINATOR

        sitting on the edge of the bed.
        His appearance isn't improving.

        A patch of SCALP is blown away, revealing CHROME underneath.
        A flap of skin dangles from his cheek, which exposes some
        of the DRIVE CABLES which move the lips.
        He is scanning Sarah's address book, turning a page every
        two seconds.

        C.U. - TERMINATOR

        his eyes tracking rapidly.  His skin is waxy, WHITE, BRUISED,
        GANGRENOUS in places.  He ignores the FEW FLIES crawling
        on his face.

                                               CUT TO:


194A/FX POV - TERMINATOR                                       194A/FX

        Showing Sarah's book.
        In microseconds the handwritten entries are translated
        into CRT-type characters and displayed to one side of the
        screen.  This updates instantly as the page is turned.

                                               CUT TO:


195     INT. HOTEL CORRIDOR - DAY                              195

        A MIDDLE-AGED MAN with a torn T-shirt covering his paunch
        knocks on the door.  He is wheeling a trash cart.

                                MAN
                      Hey, buddy, you got a
                      dead cat in there of what?

                                               CUT TO:


196     INT. TERMINATOR'S HOTEL ROOM - DAY                     196

        TIGHT ON TERMINATOR

        as he looks up.

                                               CUT TO:


197/FX  POV - TERMINATOR                                       197/FX

        The digitized image PANS to the door and a LOGIC-FLOW
        DIAGRAM appears overlaid in color-coded words.  It con-
        cluded with a list of potential appropriate responses:

        YES/NO
        OR WHAT
        GO AWAY
        PLEASE COME BACK LATER
        FUCK YOU
        FUCK YOU, ASSHOLE

        The last begins to FLASH, and enlarges to fill the screen.

                                               CUT TO:


198     RESUME ANGLE

                                TERMINATOR
                      Fuck you, asshole.

        He returns to his scan.

                                               CUT TO:


199     INT. CORRIDOR - DAY                                     199

        The man shrugs and walks down the hall.

                                               CUT TO:


200     EXT. MOTEL - DAY

        The two fugitives walk toward an economy motel of the
        two-story park-by-the-door variety.
        Sarah turns to wave as a TRACTOR-TRAILER pulls away noisily,
        heading back to the Interstate.  The driver answers her wave
        out the side window.  Reese stops for a moment outside the
        motel office to pet a GERMAN SHEPHERD sitting on the porch.
        The dog wags its tail and licks his hand.

        Reese opens the door and they go in.

                                               CUT TO:


201     INT. MOTEL OFFICE - DAY                                201

        Reese pulls a crumpled wad of bills from his jeans and shows
        it to Sarah.

                                REESE
                      Is this enough?

                                SARAH
                      Yes.  And I don't want to
                      know where you got it.

        She turns to the desk clerk, a female version of the pawn-
        shop lizard.

                                SARAH
                           (to clerk)
                      We need a room...with a
                      kitchen.

                                               CUT TO:


202     INT. MOTEL ROOM - DUSK

        Kyle and Sarah enter the spartan room.

                                SARAH
                      I'm dying for a shower.  You
                      could use one too.  And we'd
                      better check that bandage.

                                REESE
                      Later.  I'm going out for
                      materiel.  Keep this.

        He hands her the .38 he took off the detective.

        She takes it without thinking as he leaves then realizes
        that she has A LOADED GUN IN HER HAND, without the slightest
        idea of how to use it.  She lays it gently on the dresser.
        As an afterthought, she turns it with one finger so that it
        is pointing the other way.

        Sarah moves the curtain slightly and looks outside.

                                               CUT TO:


203     EXT. MOTEL - DUSK                                      203

        Reese walks away toward a commercial area visible down the
        road.

                                               CUT TO:


204     INT. MOTEL ROOM - NIGHT                                204

        Sarah is on the phone, her hair still wet from a shower.
        She sits on the bed with a towel wrapped around her.

                                SARAH
                      ...No, Mom, I can't tell you
                      where I am.  I was told not
                      to say.

                                SARAH'S MOM (V.O.)
                           (filtered)
                      But honey, I need to know where
                      I can reach you or I'll be
                      worried sick.  It turns out I
                      can't stay up here...the
                      electricity's off...and I don't
                      know just where I'll be.

        Sarah hesitates, then:

                                SARAH
                      Okay, here's the number.  Are
                      you ready?

                                SARAH'S MOM (V.O.)
                           (filtered)
                      Go ahead.

                                               CUT TO:


205     INT. MOUNTAIN CABIN - NIGHT                            205

        SLOW PAN around the room as the conversation between Sarah
        and her Mom continues, completely VOICE OVER.

                                SARAH (V.O.)
                           (filtered)
                      It's 408-972-1439.  Room 14.

                                SARAH'S MOM (V.O.)
                           (filtered)
                      I got it.

        The PAN continues, revealing an overturned chair.

                                SARAH (V.O.)
                           (filtered)
                      Okay, I've gotta go.  I'm
                      sorry I can't tell you very
                      much now, Mom.  I love you.

        The PAN comes to a table.  Smashed plates.  Spilled coffee.
        A spatter of blood.  A phone.  It follows the phone cord
        onto Terminator in CLOSE-UP as he continues in a perfect
        simulation of her mother's voice...

                                TERMINATOR (MOTHER'S VOICE)
                      I love you too, sweetheart.

                                               CUT TO:


206     INT. MOTEL ROOM - NIGHT                                206

        Sarah hangs up the phone, vaguely disturbed.

                                               CUT TO:


207     INT. MOUNTAIN CABIN - NIGHT                            207

        Terminator rapidly dials the number Sarah gave.

                                TERMINATOR (HIS VOICE)
                      Hello.
                           (pause)
                      Tell me your address there.

                                               CUT TO:


208     INT. MOTEL ROOM - NIGHT                                208

        TIGHT ON SEVERAL GROCERY BAGS

        covering the counter beside the hot-plate in the tiny
        apartment.

        Reese's hands split one open and its contents spill out.

        FULL SHOT

        Sarah looks through Reese's haul.

                                SARAH
                      Let's see.  Corn syrup.
                      Ammonia.  Moth balls...
                      Mmm.  What's for dinner?

                                REESE
                           (preoccupied)
                      Plastique.

        There are also boxes of shotgun shells, road flares, tape,
        scissors, pans, a strainer and many other odd utensils,
        substances, chemicals.

                                SARAH
                      What's that?

                                REESE
                      Nitroglycerin, basically.
                      Bit more stable.  I learned
                      howto make it when I was a
                      kid.

        Sarah looks a bit stricken as she contemplates the evening
        ahead.

                                               CUT TO:


209     EXT. HIGHWAY/CHEVY CAMARO - NIGHT                      209

        The dashlight illuminated Terminator from beneath as he drives
        through the night.  He looks like Death.  His left eye
        glows a faint red in the darkness.

                                               CUT TO:


210     INT. MOTEL ROOM - NIGHT                                210

        A heartwarming domestic scene.
        Sarah and Kyle have pulled the dresser out to use as a
        worktable.  Pans, packages and bottles clutter the kitchen,
        B.G.  On the table between them are eight ten-inch lengths
        of PLUMBER'S PIPE, threaded each end.  Kyle is showing
        Sarah how to tamp the HIGH-EXPLOSIVE PUTTY into the pipe
        bombs and seal them shut.

                                REESE
                      Make sure there's none on the
                      threads, like this.  Now screw
                      the end-cap on...very gently.


                                SARAH
                      You must have had a fun child-
                      hood.

                                REESE
                      That's good.  Now, seven more
                      like that while I make fuses.

                                SARAH
                      I was thinking, there's so
                      much I've got to show you
                      when we get through this.
                      It's mind boggling, the pos-
                      sibilities...Disneyland, the
                      beach, movies...matinees with
                      popcorn and foot-long hot dogs...

                                REESE
                      Hot dogs?

                                SARAH
                      I want to buy you a hot dog so
                      bad,Kyle...all the things you've
                      never seen and done.  You're here,
                      but wherever you go, and whatever
                      you touch, you bring the war with
                      you.

                                REESE
                      My whole life has been combat.

                                SARAH
                      I want it to be over for you.

                                REESE
                      Not possible.

                                SARAH
                      I want it to be over for me too.
                      I feel like I slipped over some
                      invisible line, that I'm in your
                      world now.  Everything's the same,
                      but I see it differently.
                      It's like, there's you and me,
                      and him...but nobody else can
                      understand or help or even touch
                      us.

        Reese looks up and finally catches her gaze.  He reaches
        out for her hand and it seems he may be taking it to
        comfort her.
        But he turns her wrist to read her watch.

                                REESE
                      We'll head out at 0200.
                      That gives you four hours
                      to sleep if you want.  I'll
                      finish.

                                               CUT TO:


211     INT. MOTEL ROOM - NIGHT                                211

        ANGLE ON TABLE - The bombs are neatly ranked, finished.
        A nylon satchel lies nearby.  The mess is cleaned up.

        WIDE SHOT reveals Reese sitting in silent vigil at the
        window.  The room is dark, lit only by a streetlight
        outside.
        Sarah is asleep on the bed.

        Reese sits cross-legged, shirtless, his body held rigid.
        The image of discipline.  The .357 is held loosely in one
        hand on his lap.  There is a fresh bandage on his shoulder.

        Sarah wakes up and goes to him in the darkness.  He looks
        at her for a moment as she sits beside him, then back outside.

                                SARAH
                      He'll find us, won't he?

                                REESE
                      Probably.  Sarah, if I get
                      zeroed...

                                SARAH
                      Don't say that.

                                REESE
                      If I do, you have to get away,
                      disappear without a trace.
                      Different country, different
                      name, everything.  In case they
                      send another one.

                                SARAH
                      It'll never be over, will it?
                      Look at me, I'm shaking.
                      Some legend, huh?  You must
                      be pretty disappointed.

                                REESE
                      No.  I'm not.

        Several beats before Sarah speaks again.  Her eyes seem
        luminous in the dark.

                                SARAH
                           (softly)
                      Kyle, the women in your
                      time...what were they like?

                                REESE
                      Good fighters.

                                SARAH
                      That's not what I meant.
                      Was there someone special?

                                REESE
                      Someone?

                                SARAH
                      A girl.  You know.

                                REESE
                           (mechanically)
                      No.
                           (pause)
                      Never.

        He looks away, outside the window

                                SARAH
                           (softly)
                      I'm sorry.

        Sarah studies him for a moment.
        She's sitting slightly behind him and she puts her hands
        on his shoulders and back, tracing the lines of his scars
        with her fingertips.

                                SARAH
                      So much pain.

                                REESE
                      Pain can be controlled.
                      You disconnect it.

                                SARAH
                      And so you feel nothing.

                                REESE
                      It's better that way.

                                SARAH
                           (with great
                           sympathy)
                      Oh, Kyle.

        Reese takes a long, slow breath before he answers, and when
        he does his voice has a new quality, an unfamiliar tenderness.

                                REESE
                      John Connor gave me a picture
                      of you once.  I never knew
                      why.  It was very old. Torn.
                      Faded.  You were young, like
                      you are now.  You weren't
                      smiling...just a little sad...
                      I always wondered what you
                      were thinking at that second.

        He closes his eyes, reaches toward her.  His fingertips
        trace the contour of her nose, chin, cheeks.

                                REESE
                           (continuing)
                      I memorized every line, every
                      curve...

        He opens his eyes, looking right at hers.

                                REESE
                           (continuing)
                      Sarah, I came across time
                      for you.  I love you.
                      I always have.

        Sarah is quietly overwhelmed.
        Reese looks away.

                                REESE
                           (continuing)
                      I'm sorry.  I shouldn't
                      have said...

                                SARAH
                      Kyle...


        She leans forward and kisses him.
        His face is frozen.  A mask.
        She continues, tenderly.
        He begins to respond.
        The dam breaks and he holds her in a tight, trembling
        embrace, clinging to her like life itself.

        Kyle picks her up and carries her to the bed.
        She kisses his neck and chest, tracing his scars with
        her lips.

        He unbuttons her blouse very slowly.
        Sarah guides his powerful hands over her.

        A SEQUENCE OF CUTS.  DETAILS.  IMPRESSIONS.

        Sarah, a very close angle, as she grimaces in divine agony.
        Reese, his face rapt.
        His hand, clutching the pillow as if to kill it.
        It is explosive, torrential.  A confluence of fate and will.

                                               CUT TO:


212     INT. MOTEL ROOM/LATER - NIGHT                          212

        TIGHT ON SARAH AND REESE in each other's arms.  Lying
        across his chest, she surveys his face as his eyes close
        drowsily.

                                SARAH
                      I bet you're ticklish.

                                REESE
                           (uncompre-
                           hending)
                      Ticklish?

        Sarah's hand moves OUT OF FRAME.  After a moment Reese
        looks down, puzzled.

                                REESE
                      What are you doing?

                                SARAH
                           (continuing
                           doggedly)
                      You'll beg for mercy in
                      a second.

        Reese seems unperturbed.  Finally he begins to squirm.

                                REESE
                      I don't think I like this.

                                SARAH
                      You're not supposed to.

        Now Reese is becoming desperate.  A grimace spreads across
        his face.  It becomes a grin.  Then he's laughing, trying
        to escape but she won't let him, and they collapse, laughing
        together.
        Sarah gazes at his grin, a glimpse of the Reese that might
        have been, in another life.

        A moment later the grin vanishes at the sound of dogs barking
        outside.
        Reese is off the bed in an instant, crouched tense, eyes
        alert.  Feral as ever.

                                REESE
                           (whispering)
                      Listen to the dogs.

                                               CUT TO:


213     EXT. MOTEL OFFICE - NIGHT                              213

        The German Shepherd, barking furiously, LUNGES TOWARD
        CAMERA repeatedly, at the end of a chain.

        A dark figure moves by in the F.G., out of the dog's reach.

                                               CUT TO:


214/FX  INT./EXT. MOTEL/TERMINATOR'S POV - NIGHT               214/FX

        The digitized view is image-intensified, bright and stark
        as a lunar landscape.  PAN OFF the lunging dog to the row
        of rooms facing the parking lot.

        HANDHELD as we approach the doors.
        It is WIDE ANGLE and the barrel of the AR-180 is visible at
        the bottom of FRAME.
        The nearest vehicle parked in front is a LARGE PICKUP TRUCK
        WITH TWO DIRT BIKES lashed in the bed, seen prominently as
        we pass.

        The POV approaches a door.  Number 14.

        The door is KICKED OPEN.
        Moving inside.
        The assault rifle sprays the room, exploding the indistinct
        forms on the bed.  Staccato glare.  Approaching the bed.
        Nothing there put the shredded remain of sheets and pillows.

        The POV shifts to the BACK DOOR, which is ajar, and moves
        toward it.  Through the door.  Revealing an EMPTY YARD.

                                               CUT TO:


215     INT. PICKUP TRUCK/PARKING LOT - NIGHT                  215

        Reese is under the dash, playing with the wires.
        Sarah lies on the seat, clutching the nylon satchel, which
        bulges with the explosive charges.  She has dressed hastily
        and is barefoot.

                                REESE
                      Light it now.

        Sarah has been holding a BIC LIGHTER near the tip of a fuse.
        She thumbs the flame on.  The fuse catches as Reese twists
        the wires and the engine starts to turn over.

                                               CUT TO:


216     INT./EXT. MOTEL ROOM - NIGHT                           216

        Terminator spins at the sound of the truck engine catching.

        FAST PANAGLIDE WITH HIM as he runs the
        length of the suite, stops outside the front door.
        Whips the AR to his shoulder.

        The truck is BACKING WILDLY across the lot B.G.
        Terminator turns, looking into CAMERA as a SIZZLING SOUND
        becomes audible.

        DETAIL - PIPE CHARGE, lying just inside the door, in the
        shadows.  The fuse is burning.

        WIDE SHOT - On doorway, from the parking lot, as Terminator
        takes two leaping strides forward and the CHARGE EXPLODES.
        The front of the building is BLOWN TO KINDLING.
        Terminator is flung forward by the blast.

                                               CUT TO:


217     EXT. STREET/PICKUP TRUCK - NIGHT                       217

        PANNING RAPIDLY as the truck shoots out of the parking lot
        and tears down the street.

                                               CUT TO:


218     EXT. MOTEL - NIGHT                                     218

        Terminator lies face down, motionless, F.G., as the debris
        from the blast settles.  A YOUNG GUY ON A HONDA 750 crosses
        the parking lot and stops near him, running forward.
        Terminator starts to get up, moving slowly.

                                RIDER
                           (crouching be-
                           side him)
                      Don't try to move, buddy.

        MOVING WITH TERMINATOR as he shoves the cyclist aside and
        approaches the BIKE, which is STILL RUNNING.

                                               CUT TO:


219/FX  PARKING LOT/TERMINATOR'S POV - NIGHT                   219/FX

        Digitized POV, approaching the cycle.  The image reduces
        to GRAPHIC OUTLINES, with separate systems COLOR-CODED.
        It breaks down suddenly into individual SIDE, TOP and PLAN
        VIEWS.  All in less than four seconds.

                                               CUT TO:


220     INT./EXT. FREEWAY/PICKUP TRUCK - NIGHT                 220

        Reese slides the truck into an ON-RAMP and guns in onto the
        freeway, burying the throttle.  Traffic is light...a few
        18-wheelers.  The truck tops out at 110 and he holds it.
        They flicker rapidly through pools of light and shadow.

        ANGLE OVER REESE'S SHOULDER as they hurtle forward.  An
        interchange flashes by in an instant.

        PACING WITH THE TRUCK, looking back as a single headlight
        arcs radically across all lanes behind them and grows
        BRIGHTER, CLOSING.

                                               CUT TO:


221     EXT. FREEWAY - NIGHT                                   221

        LOW WIDE ANGLE preceding Terminator on the bike.  He is
        tucked, getting as much speed as possible out of the 750.
        As he GAINS ON THE CAMERA, FILLING FRAME, he unslings the
        assault rifle.  Raises it against the windstream in a one-
        handed pistol grip.

                                               CUT TO:


222     INT. PICKUP TRUCK - NIGHT                              222

        Reese motions Sarah to keep her head down.  He pulls the
        Colt Python from his coat pocket.  Steering with his elbows,
        he checks the load.  Snaps the cylinder shut.  Glances in
        the rear mirror.  Turns the wheel.

                                               CUT TO:


223     EXT. FREEWAY - NIGHT                                   223

        WIDE ANGLE, following close to Terminator, as he closes on
        the pickup, B.G.  The truck swerves suddenly, diving around
        a TRACTOR-TRAILER.  Terminator leans hard to follow.

        LOW WIDE ANGLE preceding the pickup and Terminator as they
        swerve as high speed.  Reese uses the slow semis as static
        obstacles.  He misses them by inches, TIRES SQUEALING.

        ANGLE OVER SARAH'S SHOULDER, through the front window as
        the back of a SEMI-TRAILER hurtles toward them, straight ahead.

        HIGH ANGLE, following both vehicles as Reese feints RIGHT
        and then skids LEFT.  He slides toward the trailer in a
        FOUR-WHEEL DRIFT as Terminator commits to the right.

        M.C.U. - TERMINATOR, over the barrel of the AR, as he FIRES.

        SIDE ANGLE - PASSING TRUCK-TRAILER, bullets strafe across
        it as the pickup vanishes behind.  Terminator skids the
        bike, barely missing an abutment, and is forced onto an
        OFF-RAMP.

        LOW SIDE ANGLE preceding Terminator as he roars down the
        off-ramp without slowing.  Runs the red light at the bottom
        as a hundred miles an hour.  Climbs the ON-RAMP.

                                               CUT TO:


224     INT. PICKUP TRUCK - NIGHT                              224

        Sarah is buffeted as Reese fights to control the skidding
        truck.  The angle is past Reese, F.G., on Sarah.
        Terminator appears B.G., converging rapidly as the on-ramp
        joins the freeway.

                                REESE
                      Switch places with me.

        She slides over him while he keeps the hammer down.

                                               CUT TO:


225     EXT. FREEWAY - NIGHT                                   225

        Reese is out the window to the waist, aiming double-
        handed.  He FIRES.  ONCE.  TWICE.  AGAIN.

        They enter an interchange.  Ahead lies a LONG, SWEEPING
        CURVE, two lanes wide and elevated.

        Terminator rocks back from a round between the eyes that
        bares metal, the FIRES.

        Bullets rake the pickup.
        The windows are blown out.
        The side mirror explodes.
        Reese is hit.  Drops the .357.
        Sarah screams and weaves, barely in control.

                                               CUT TO:


226     INT. PICKUP TRUCK - NIGHT                              226

        Sarah reaches across and pulls Reese's limp body back
        inside.  He slumps on the seat, moaning.  Stunned.

                                SARAH
                      Kyle...oh God...

        He has a bullet in the chest.  Another has broken his arm.
        Sarah feels all hope recede.

                                               CUT TO:


227     EXT. FREEWAY - NIGHT                                   227

        Terminator crosses behind the truck, coming up on Sarah's side.
        He FIRES.
        Sarah shrieks as the doorpost next to her head CLANGS WITH
        HITS.

        The short burst EMPTIES THE GUN.
        It CLATTERS TO THE PAVEMENT a moment later, discarded.
        Terminator draws the .38.  Takes aim.

        Sarah SCREAMS.  HITS THE BREAKS HARD.  CRANKS THE WHEEL.
        GLASS behind her EXPLODES with gunfire.

        SWERVING VICIOUSLY the truck SLAMS THE BIKE, sending it
        FLYING INTO A GUARDRAIL.  Terminator goes over the handle
        bars at a hundred miles per hour.

                                               CUT TO:


228     INT. PICKUP TRUCK - NIGHT                              228

        Sarah fights the wheel, losing control of the slewing pickup.

                                               CUT TO:


229     EXT. FREEWAY OVERPASS - NIGHT                          229

        Terminator hits the pavement, tumbling, rolling, sliding
        with a CHATTERING SCREECH and spraying sheets of SPARKS
        as flesh strips away and steel screams on concrete.
        The pickup SWAPS ENDS violently, smashing into the guardrail.

        Terminator hits the guardrail, bounces up, tumbles along the
        top and then pitches OUT INTO SPACE.

                                               CUT TO:


230     EXT. INTERSECTING FREEWAY - NIGHT                      230

        Terminator smashes to the pavement in the middle lane and
        lies there, face-down.  Still.

                                               CUT TO:


231     INT./EXT. PICKUP/OVERPASS - NIGHT                      231

        Sarah is slammed hard as the truck grinds to a stop against
        the guardrail.  She checks Kyle.  He is barely conscious.
        Sarah heaves open the door.  Runs to the guardrail. Looks down.

                                               CUT TO:


232     EXT. LOWER FREEWAY - NIGHT                             232

        After a long moment Terminator slowly rolls over and sits up.

        LOW ANGLE as he rises into FRAME, a mass of blood.  Clothing
        and skin in tatters.

        HEADLIGHTS FLARE behind him and an AIRHORN BLARES.

        FULL SHOT as a DOUBLE-TRAILER KENWORTH GASOLINE TANKER smashes
        him down and under with a METALLIC CRASH.

        ANGLE UNDER TANKER as Terminator rolls, clattering, and the
        mass blurs above him.  He RICOCHETS between the pavement and
        the speeding undercarriage until a stray bounce flings him
        up into the rear suspension.

                                               CUT TO:


233     EXT. FREEWAY OVERPASS - NIGHT                          233

        UP ANGLE ON SARAH

        at the railing, looking down.  She raises one fist into
        the air triumphantly.

                                SARAH
                     Alriiight!

                                               CUT TO:


234     INT. TANKER CAB - NIGHT                                234

        The stunned DRIVER hits the brakes.  His PARTNER grabs
        his arm.

                                PARTNER
                     Don't stop.

        They lock eyes for a moment.
                                DRIVER.
                     I have to, man.

                                               CUT TO:


235     EXT. FREEWAY/TANKER                                    235

        ANGLE UNDER THE REAR TRAILER

        Terminator clings with inhuman strength to the rear suspen-
        sion.  The pavement blurs by beneath him.  The air brakes
        howl.

                                               CUT TO:


236     EXT. FREEWAY OVERPASS - NIGHT                          236

        Sarah watches the truck roll on without leaving a body
        in its wake.
        She feels a premonitory dread.

                                               CUT TO:



237     EXT. FREEWAY/TANKER - NIGHT                            237

        Beneath the braking  semi, Terminator CRAWLS UPSIDE DOWN,
        hand over hand like a HUMAN FLY, toward CAMERA.  The
        left eye GLOWS LIKE A COAL in the dark.  As the pavement
        stops beneath him he drops off and rolls out from under
        the truck.

                                               CUT TO:


238     INT. TANKER CAB - NIGHT                                238

        The driver looks around in astonishment as his door is
        ripped open.
        Terminator appears.  A grisly apparition.
        FLINGS THE DRIVER OUT and takes his place behind the wheel.
        Ignoring the terrified partner, he examines the controls.

                                               CUT TO:


238/FX  POV - TERMINATOR                                       238/FX

        In digitized cyborg-vision we see an ABSTRACT OF THE
        INSTRUMENTS.  The shift lever is extended graphically
        down into a three-dimensional SCHEMATIC OF THE TRANS-
        MISSION.  Analytical DATA PRINTS OUT RAPID-FIRE.

                                               CUT TO:


239     EXT. FREEWAY OVERPASS - NIGHT                          239

        From the railing Sarah sees the tanker below as

        a body falls beside it, rolling.
        The truck swings in a slow arc.
        TEARS THROUGH THE DIVIDING FENCE.
        Heads back toward her on the wrong side of the freeway.

        She stares in numb horror.
        The nightmare refuses to end.
        She runs to the crippled pickup and sees a front tire flat,
        shredded by a crumpled fender.

        She searches the cab frantically for the KEYS TO THE
        MOTORCYCLES.  Finds them above the sun visor.

        Sarah leaps into the bed of the pickup and attacks the
        motorcycle strap-downs frantically.
        Panting with terror she rolls the bike off the truck.
        It crashes on its side and she falls on it painfully.

        Straining until she CRIES OUT INVOLUNTARILY, she lifts
        it upright.
        KICKS the engine over.

        LOW ANGLE

        as the tanker crashes back through the divider and starts
        UP THE OVERPASS.  Sarah is trapped in that concrete corridor.
        She kicks for her life.
        The bike catches for a moment.  Dies.

        The truck BELLOWS, down-shifting on the curving grade.
        Sarah kicks again and again, crying out with each stroke.
        Again and again, furiously.
        The engine CATCHES.

                                SARAH
                           (rapidly)
                     Come on, come on, come on
                     ...run, you...

        The bike runs with a healthy roar.

        LOW ANGLE

        up the face of the tractor-trailer, the retaining wall blur-
        ring by.  Terminator's red eye can be seen through the wind-
        shield.

        Sarah drags Reese, stumbling,to the bike, props him on the
        seat behind her.  He clutches the satchel weakly.

                                SARAH
                     Hold on real tight, okay?

        She guns the engine and roars off.

        LOW ANGLE

        as the tanker demolishes the pickup a moment later, TOSSING
        IT OVER THE SIDE LIKE A BEER CAN.

                                               CUT TO:


240     EXT. FREEWAY - NIGHT                                   240

        Sarah hits level freeway with a quarter-mile lead on the
        tanker, distant B.G., but the little bike is overloaded
        and she can't coax it above seventy-five.

        ANGLE ON TANKER roaring forward, shifting up through
        the gears.

        CLOSE ON SARAH AND KYLE, his head lolling on her shoulder.
        He starts to fall sideways.

                                SARAH
                           (shouting)
                     Hold on, goddamnit!

        He rouses slightly, gripping her tighter.

        HIGH ANGLE - MOVING WITH BOTH VEHICLES as Sarah starts to
        ZIGZAG desperately across all four lanes.  The truck stays
        with her, closing, its trailer WHIPLASHING VIOLENTLY.

                                               CUT TO:


241     EXT./INT. TUNNEL - NIGHT                               241

        The truck is right behind them as then enter a TUNNEL.
        A half-mile of exitless concrete and strobing fluorescent
        lights.

        M.C.U. - SARAH AND KYLE (PROCESS SHOT) - He blinks and looks
        back at a SOLID WALL OF METAL AND LIGHTS looming behind them.
        Sarah hunches down.  They hit eighty.

        FULL SHOT - The leviathan dwarfs them, its big tires ROARING
        like the hubs of Hell.

                                               CUT TO:


242     EXT. FREEWAY - NIGHT                                   242

        The tanker is twenty feet behind them as they clear the
        tunnel.  Sarah dodges to one side and LOCKS THE BRAKES.
        The bike slides, fish-tailing.
        The truck roars past, hitting the air-brakes.
        The trailers force her closer and closer  to the guardrail
        as Terminator tries to sandwich her.
        The bike slides to a stop.
        The rearmost set of trailer wheels slams into the guardrail
        right in front of Sarah.

        Sarah emerges from a cloud of tire smoke, cutting across
        all four lances behind the stopped semi.

                                               CUT TO:


243     EXT. FREEWAY EMBANKMENT - NIGHT                        243

        Sarah tries to ride down the steep embankment but loses
        control, spilling the bike.  She and Kyle tumble down
        the slope.

        MOVING WITH HER as she scrambles, half-dragging Kyle, through
        a row of trees at a chainlink retaining fence.  She crawls
        under the fence, tugs Kyle and the satchel through after.

        Sarah looks up at the source of a SUDDEN THUNDEROUS ROAR.

                                               CUT TO:


243/FX  ANGLE ON TANKER                                        243/FX

        It appears above them, grinding over the embankment.  It
        rolls down the steep slope TOWARD CAMERA, FLATTENING TREES.

                                               CUT TO:


244     EXT. INDUSTRIAL SITE - NIGHT                           244

        Sarah and Kyle scramble up and run across the STORAGE LOT
        of a MODERN FACTORY COMPLEX of LOW BUILDINGS.  Kyle struggles
        to keep up, holding the satchel.

        LIKE A JUGGERNAUT the truck follows, smashing through parked
        cars and FLATTENING A PRE-FAB STORAGE BUILDING.

        They enter an alley-like space between two buildings.
        Kyle is fumbling to open the satchel.

        ANGLE BACK as the tanker enters the alley.  It TEARS THE
        CORNER OFF ONE BUILDING as it turns in.  Terminator looks
        down from his mountain of steel.

                                               CUT TO:


245     INT. TANKER CAB - NIGHT                                245

        OVER TERMINATOR'S SHOULDER, looking down at a tiny figure
        below, running in the headlights' glare.  It is Sarah, alone.

                                               CUT TO:


246     EXT. ALLEY - NIGHT                                     246

        Reese crouches in a TRASH-DUMPSTER which is sandwiched
        between the wall and the tanker.  There are only inches
        of clearance as the trailers pass by.

        He lights a PIPE CHARGE, jumps up and wedges it under the
        tank-cylinder of the second trailer.
        He ducks as it rolls on.

        Sarah is stumbling in the glare of the truck's lights.

        E.C.U. - PIPE BOMB, the fuse burning.

        M.C.U. - TERMINATOR, through the windshield, his eye glowing.

        C.U. - REESE huddles in the dumpster.

                                               CUT TO:


247/FX  LOW WIDE ANGLE ON SARAH AND TRAILER (PROCESS SHOT)     247/FX

        The REAR TRAILER EXPLODES.  An unbelievable FIREBALL ERUPTS
        SKYWARD, silhouetting Sarah's running figure F.G.
        The dumpster is enveloped by fire and hurled, rolling, down
        the alley.

        Sarah makes it around a corner as the FORWARD TRAILER
        EXPLODES and an OCEAN OF FLAME rolls forward, blasting by her.

        The dumpster topples and Kyle rolls out, surrounded by fire.


248/FX  SEQUENCE - TERMINATOR                                  248/FX

        In the center of the inferno Terminator struggles violently.
        His FLESH FIRES AND SIZZLES.  He tears loose from the
        TWISTED WRECKAGE and collapses to the ground.  Sinks into
        a CHARRED MASS.  STOPS MOVING.

        C.U. - TERMINATOR, mouth open, skull-like, motionless
        in the flames.

                                               CUT TO:


249     EXT. ALLEY - NIGHT                                     249

        Sarah crawls away from the intense heat and lies watching
        the motionless figure in the blaze.

                                               CUT TO:


250     EXT. ALLEY/FAR END - NIGHT                             250

        Sarah rounds the corner, staggering, searching.
        She sees Kyle crumpled face-down near the dumpster, sheltered
        from the heat by its mass.

        She drags his away.  Rolls him over.

        C.U. - REESE, his head lolls.  He opens his eyes

                                REESE
                           (weakly)
                     Sarah.

                                SARAH
                     We did it, Kyle.  We got it.

        She hugs him.

                                               CUT TO:


250/FX  FULL SHOT (PROCESS)                                    250/FX

        They hold the embrace, silhouetted by the diminishing flames.
        It would be a wonderful final image.
        Except...TERMINATOR STAGGERS OUT OF THE BLAZE BEHIND THEM.

        M.C.U. - TERMINATOR, the last flakes of flesh are falling
        from him like burning leaves.  His gleaming structure is
        revealed in all its intricacy.  No longer a 'He', but an 'It'.
        It looks like Death rendered in steel.
        A CHROME SKELETON with HYDRAULIC MUSCLES and TENDONS OF
        FLEXIBLE CABLE.  In the sockets of the metal skull, the
        eyeball swivels with a WHIR of tiny servos, both glowing
        red now.

        It turns slowly and fixes its gaze directly INTO CAMERA.

                                               CUT TO:


251     EXT. ALLEY - NIGHT                                     251

        C.U. - SARAH - She chokes on a scream, crams knuckles in
        her mouth.

        FULL SHOT (FX), as the machine takes a step toward them,
        dragging one MALFUNCTIONING LEG.

        PANAGLIDE WITH KYLE AND SARAH as they stagger to their feet
        and run to the nearest building.  They come to a glass door.
        Kyle kicks it in.  Unlatches it.  They enter dark OFFICES
        to the sound of ALARMS and DISTANT SIRENS.

                                               CUT TO:


252     INT. CORRIDORS - NIGHT                                 252

        Sarah and Kyle run down a corridor.
        Through a door, which they close and lock.
        They move off down a cross-corridor.
        The Terminator BLASTS THE DOOR OFF ITS HINGES, F.G., and
        staggers through.  It starts after their receding figures
        as they round the corner at the end of the hall.

                                               CUT TO:


253     INT. OPEN OFFICES - NIGHT                              253

        Wracked, exhausted, they stumble through a maze of PARTI-
        TIONED OFFICE CUBICLES.

                                               CUT TO:


254     INT. CORRIDOR - NIGHT                                  254

        The Terminator catches sight of them through a floor-to-
        ceiling window.  It makes an unhesitating right turn through
        the glass.

                                               CUT TO:


255     INT. OPEN OFFICES - NIGHT                              255

        Sarah and Kyle look back at the sound of SHATTERING GLASS.

        PANAGLIDE PRECEDING THE TERMINATOR as it crashes forward,
        line-of-sight, through the maze.  It splinters partitions.
        Flings desks out of the way.

        FOLLOWING SARAH AND KYLE as they reach a heavy FIREDOOR and
        go through.

                                               CUT TO:


256     INT. MANUFACTURING AREA - NIGHT                        256

        Kyle slides the bolts on the metal firedoor.  Behind them
        are acres of machinery in darkness.  Silence.
        CRASH!  The Terminator hits the door from the far side.
        Hinges SQUEAL.

        Kyle goes to a LARGE BREAKER PANEL and opens it.  Starts
        throwing switches.  Behind them, machines START UP ONE BY ONE.

                                SARAH
                           (panting)
                      What are you doing?

                                REESE
                           (weakly)
                      Cover...our footsteps...

        He sags, sliding down the wall.  She pulls him up.
        Half-carries him into the maze of machines.
        The dark gallery is filled with WHIRRING, CLANKING SHAPES,
        SHATTERING CONVEYER BELTS and improbable mechanisms lashing
        mindlessly.

        Reese slips to the floor and Sarah is no longer able to
        support him.

                                REESE
                           (faintly)
                      Leave me here.

        Sarah crouches beside him.
        Grabs his shirt front.
        Yells over the machines.

                                SARAH
                      I'm not leaving you anywhere
                      you jerk.  Haven't you figured
                      it out?  Kyle, John is our
                      son.

        Reese's eyes refocus.

                                SARAH
                           (continuing)
                      There isn't going to be
                      anybody else...I don't want
                      anybody else.  Listen to
                      me!

        She pauses, then resumes in a commanding, military shout.

                                SARAH
                           (continuing)
                      Move!  Reese! Let's go.
                      Move you ass!

        She drags him to his feet and he staggers on.

        Hinges SHATTER and the firedoor is hurled inward.
        The Terminator scans the darkness.

        ANGLE - PANNING WITH SARAH AND KYLE as they move through
        the machines.

        The cyborg steps forward, scanning methodically.

        Sarah and Kyle move in a crouch through the treacherous
        tangle of pipes and machinery.  Kyle picks up a length of
        pipe to use as a weapon.  As they climb out onto a cat-
        walk between the two huge mechanisms, Sarah clambers over
        an innocuous CONTROL PANEL.
        Her knee inadvertently hits a RED PUSH BUTTON.
        With a ROAR the stamping-plate of a HYDRAULIC PRESS slams
        down an inch from her hand.
        Startled, she tumbles to the catwalk.

        The Terminator's eyes swivel as he hears the single non-
        rhythmic sound.

        Kyle and Sarah run to the end of the catwalk, but find the
        door there locked.

                                SARAH
                      Come on!

        They double back to escape the cul-de-sac.  The Terminator
        steps in front of them, cutting them off.

                                REESE
                           (shouting)
                      Run!

        He pushes Sarah roughly and she stumbles away.
        Kyle raises the pipe with his good arm as the Terminator
        advances.

                                REESE
                           (over his
                           shoulder)
                     Run, damn it!

        She hesitates, backing away.
        The cyborg swings at Reese
        STEEL CLANGS ON STEEL.
        Kyle strikes and parries but is sledgehammered back.

        ANGLE ON CATWALK as Kyle lands in a heap, smashed against
        a stanchion of the railing which prevented him falling to
        the factory floor twenty feet below.

        Sarah turns and runs.

        LOW ANGLE PAST REESE, F.G., as the cyborg approaches him.

        E.C.U. - A FUSE BURNING.

        C.U. - KYLE'S FACE streaked with blood, pressed to the
        floor as a metal foot CLANGS DOWN, F.G.   His eyes snap open.

        Sarah falls, gets up, runs on.
        The Terminator draws back for a death blow.
        And Kyle rolls with the last of his strength, raising
        the pipe bomb he has been cradling.  He jams it between two
        hydraulic cylinders just beneath the cyborg's armored  rib-
        cage.  Then rolls off the catwalk.  Terminator has an instant
        to react, reaching for the bomb, before it EXPLODES.

        Sarah is pitched forward by the blast and slides on the
        floor.
        Slams up against one wall.
        A withering spray of shrapnel strafes the walls around her.
        Pieces of scrap metal clatter throughout the factory, rain-
        ing down.

        C.U. - SARAH, very still.  She winces and opens her eyes.
        Slowly looks up.

        POV - SARAH, as the smoke clears.  The Terminator is GONE.
        Unrecognizable clumps of BURNING DEBRIS lie scattered about.
        Looking down through the grating floor she sees Kyle's
        body.
        LOW ANGLE ON KYLE F.G., Sarah on catwalk above.  Kyle's eyes
        are half-open.  Still.  His face peaceful.
        ANGLE ON ONE OF THE FIRES climbing some plastic tubing and
        triggering a SPRINKLER HEAD.  It begins to rain.
        C.U. - SARAH sitting up as the water runs over her.
        She looks down.  Protruding from her right thigh is a TWISTED
        PIECE OF METAL.  Shrapnel.  Part of the cyborg.  She pulls
        it out, grimacing.  Her leg is broken.

        It is a long time before she can gather the will to move.

        SARAH'S POV - She sees a WALL PHONE several yards away,
        beyond the debris from the explosion.
        She starts to crawl toward it.
        She passes A LARGE CLUMP OF DEBRIS, F.G.

        ANGLE ON DEBRIS (FX) as it rolls over suddenly!
        Now recognizable as the TERMINATOR'S HEAD AND ARMS, with
        half of the scattered torso trailing wires and twisted
        metal.

        IT LUNGES FOR HER!

        Sarah wants to scream this time, from the depths of her
        soul, but there is no scream, only a dry shivering sob.

        The Terminator drags itself SCRAPING over the floor, steel
        fingers clutching.

        Sarah is shaking and whimpering as she scrabbles away,
        crawling in agony.

        ANGLE ON CONVEYOR BELT as Sarah flops from the catwalk
        onto the MOVING STRIP.  She is carried into the intricate
        lattice of equipment.  Sarah rolls off weakly before going
        under a set of sorting rollers.

        ANGLE THROUGH MACHINERY - ON THE TERMINATOR (FX) as it crawls
        after her, dragging its body.  It tracks her unerringly,
        EYES GLOWING.

        Sarah moves deeper into the DARK, CLASHING JUNGLE of machinery.
        Around her is a rain-drenched tangle of CABLES, PIPES and
        unforgiving mechanisms of steel.

        The Terminator clambers through after her.

        C.U. - SARAH - Water pours into her eyes as she catches
        sight of something.  A familiar CONTROL BOX.
        She drags herself toward it.

        C.U. - THE TERMINATOR (FX) - It spots her wedged in a tiny
        crawl space.  No way out.

        It crawls the last few feet,EYES RED IN THE DARK.
        Hypnotized, Sarah watches the Terminator REACHING TOWARD HER.
        She is jammed in a corner.
        Sarah's hand claws around to the front of the control panel,
        seeking the RED BUTTON.

        E.C.U. - HER WET FINGERTIPS FEEL THE BUTTON.

        ANGLE ON THE TERMINATOR (FX), his steel hand reaching out.

        E.C.U. - SARAH, her face inexplicably calm, eyes steady in
        that infinite instant.  She clenches her teeth to keep
        from screaming as she WAITS.

        The Terminator's hand reaches for her throat to crush
        the life out of her and end its long mission.

                                SARAH
                           (voice icy)
                      You're...terminated...fucker!

        E.C.U. - BUTTON, as her bloody finger stabs it down.

        FULL SHOT, showing how the cyborg has been led into the
        MAW OF THE HYDRAULIC PRESS.
        THE STAMPING PLATE THUNDERS DOWN!
        Tons of mechanical pressure flatten the Terminator's head
        and body like tin-foil.  The PRESS SCREAMS, jamming solid.
        Lightning snaps out in one brief blaze, leaping to surround-
        ing machinery, arcing to Sarah's wristwatch.  All the
        Terminator's energy is released in one second.

        ANGLE on the narrow gap between the upper and lower plates:
        a pinpoint of red light DWINDLES AND GOES OUT.
        TIGHT ON SARAH, shivering uncontrollably.  The steel fingers
        are frozen an inch from her throat.  She can only stare as
        water runs over her.

                                               CUT TO:


257     INT. FACTORY - DAWN                                    257

        CLOSE ON the side rail of an ambulance gurney SNAPPING UP
        into position.  Sarah's eyes are closed and she is moved
        OUT OF FRAME.

        WIDE SHOT, showing the gurney being rolled by TWO ATTENDANTS
        past the site of the last explosion.
        SEVERAL POLICE OFFICERS are picking through the debris.

        PANNING WITH THE GURNEY as it is wheeled out, holding on
        TWO FACTORY EMPLOYEES, F.G.
        One, the PLANT MANAGER, bends to examine a piece of the
        cyborg lying at the base of the hydraulic press.
        A COP, B.G., notices this.

                                COP
                      Look, I told you not to
                      touch anything until we're
                      done.  You got that?

                                MANAGER
                      Sure thing, officer.

        He stands and palms a small object to HIS ASSISTANT.  They
        step around the corner.

                                ASSISTANT
                      What is it?

                                MANAGER
                      Microcomputer chassis.  But
                      I've never seen stuff like
                      this anywhere.

                                ASSISTANT
                      Weird.  Jap stuff, maybe?

                                MANAGER
                      Keep it out of sight and
                      get it down to R and D
                      Monday, first thing.

                                ASSISTANT
                      Good idea.

                                               CUT TO:


258     EXT. BUILDING - DAWN                                   258

        Sarah is being lifted into the ambulance.  She looks
        up as the doors are latched shut.

        TILT UP to follow her gaze.
        The sign above the entrance of the building reads:

        CYBER DYNAMICS CORPORATION

                                               SLOW DISSOLVE TO:


259     INT./EXT. LANDROVER - LATE AFTERNOON                   259

        MACRO ON CASSETTE RECORDER, the center capstans of a
        tape turning.

                                SARAH (V.O.)
                      ...and the hardest thing is
                      deciding what I should tell
                      you and what not to.  Well,
                      anyway, I've got a while yet
                      before you're old enough to
                      understand the tapes.  They're
                      more for me at this point...
                      to help get it all straight.

        COVER SHOT reveals Sarah as the wheel of a dusty landrover
        parked at the pump island of a tiny gas station.  All of
        its signs are in hand-lettered Spanish.  Beyond lies an
        expanse of scrub desert.  The sky scowls with an impending
        storm.

        Sarah speaks quietly into a hand microphone as a dark-
        complected attendant laconically fills her tank.  She
        cradles the cassette recorder in her lap, in the lee of
        her SWOLLEN BELLY.
        She looks to be about SIX MONTHS ALONG.
        Under her down vest she wears a leather shoulder holster
        and the butt of a .357 REVOLVER presses against her
        breast.  She tugs the vest closed as the attendant glances
        her way.  A German Shepherd sits in the back among taped
        boxes and suitcases.

                                SARAH
                           (continuing)
                      Should I tell you about your
                      father?  That's a tough one.
                      Will it change your decision
                      to send him here...knowing?
                      But if you don't send Kyle,
                      you could never be.  God,
                      you can go crazy thinking
                      about all this...I suppose
                      I'll tell you...I owe him that.
                      And maybe it'll be enough if
                      you know that in the few hours
                      we had together we loved a
                      lifetime's worth...

        CLICK.  WHIR.  Sarah jumps at a sound nearby, breaking
        her reverie.  A small MEXICAN BOY has snapped her picture
        with a beat-up Polaroid camera.  He holds it out to her,
        speaking rapid Spanish.

                                ATTENDANT
                      He says you are very beautiful,
                      Senora, and he is ashamed to ask
                      five American dollars for this
                      picture, but if he does not,
                      his father will beat him.

                                SARAH
                      That's a pretty good hustle,
                      kid.  Four.  Quatro.

        The boy takes her four dollars and she watches the
        snapshot develop.  It is a good photograph of her,
        the wind lightly ruffling her hair, expression thought-
        ful, slightly sad.

        We recognize it as the one Reese carried in 2029.
        She slips it into her short pocket.

                                ATTENDANT
                      Mil trescientos...fifteen dollars
                      American.

        As she pays him, distant thunder rolls.
        The boy yells something in Spanish as he runs off.

                                SARAH
                      What did he say?

                                ATTENDANT
                           (accented)
                      There is a storm coming in.

        Sarah gazes at the thunderheads building up out over the
        desert.  Heat lightning pulses in their depths.

                                SARAH
                           (quietly)
                      I know.

        CAMERA CRANES UP as she pulls away, driving across the
        flat desert on a ribbon of highway.  A brilliant flash
        crescendos from horizon to horizon out at the rim of the
        world.
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
