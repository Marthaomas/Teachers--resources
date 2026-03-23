import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import eye from "../assets/eye.JPG";

const poems = [
  {
    id: 1,
    title: "What About Those?",
    content: `What About Those?
    What about the forgotten?
    The ones swallowed by sorrow’s sea,
    Whose minds are battlegrounds each dawn,
    Whose hearts whisper, "Will anyone see me?"
    
    The ones who wear smiles as armor,
    While depression breathes behind their eyes—
    Those who wrestle with shadows in silence,
    And pray, "Lord, will You hear my cries?"
    
    "The Lord is close to the brokenhearted
    and saves those who are crushed in spirit."
    — Psalm 34:18
    
    What about those who never had it easy,
    Who’ve known storms since birth’s first breath?
    They’ve walked through valleys so dark,
    They learned to dance with death.
    
    Yet even there, in their wilderness,
    God whispers through the pain—
    "My child, I have not forgotten you,
    Your tears are not in vain."
    
    "Can a mother forget the baby at her breast
    and have no compassion on the child she has borne?
    Though she may forget, I will not forget you."
    — Isaiah 49:15
    
    The world walks past their doors,
    While Heaven lingers and knocks.
    Angels stand guard in the night,
    When despair tries to pick the locks.
    
    "Even though I walk through the valley
    of the shadow of death, I will fear no evil,
    for You are with me."
    — Psalm 23:4
    
    It’s easy to serve when life is bright,
    When blessings sing like morning light.
    But faith is proven in the storm,
    When the soul still whispers, "God is right."
    
    So what about those who are weary and worn?
    God calls us to be their friend—
    To knock on their doors,
    To love without end.
    
    "Bear one another’s burdens,
    and so fulfill the law of Christ."
    — Galatians 6:2
    
    Because mercy was never meant to stay silent,
    And love was never meant to stay still.
    For every forgotten heart still beating,
    He remembers. He restores. He will.
    
    "For I know the plans I have for you," declares the Lord,
    "plans to prosper you and not to harm you,
    plans to give you hope and a future."
    — Jeremiah 29:11`,
  },

  {
    id: 2,
    title: "Finding Rest",
    content: `Digging and digging...
    Digging through the sands,
    hoping that maybe—just maybe—
    I'll find rest.
    
    Digging through the streets,
    hoping love will notice me this time.
    
    Running through the waters,
    praying the waves will wash my soul clean.
    
    But yet... I don't find rest.
    My body is tired.
    My mind is loud.
    My spirit is restless.
    
    How can I find rest, Lord?
    When my thoughts are a battlefield,
    and my demons—
    they wear my name.
    
    They whisper,
    "You'll never be enough."
    
    They mock,
    "You'll never change."
    
    And somehow,
    I've called them home.
    I've called them me.
    
    But they are not me.
    They are demons—
    thieves sent to steal what You gave.
    
    If only, God...
    If only You could take these demons away from me.
    
    I can't keep moving on like this.
    My heart is heavy,
    and I'm sinking in silence.
    
    But then... Your Word speaks.
    
    Matthew 11:28 —
    "Come to Me, all who are weary and burdened,
    and I will give you rest."
    
    You said rest.
    Not in sand.
    Not in streets.
    Not in waters.
    But in You.
    
    Psalm 34:17 says,
    "The righteous cry out, and the Lord hears them;
    He delivers them from all their troubles."
    
    So I cry out.
    Right here.
    Right now.
    
    Deliver me, Lord.
    Not because I'm worthy,
    but because You're merciful.
    
    Break the chains,
    silence the demons,
    let Your Spirit rise in me.
    
    Teach me that my pain
    is not my punishment,
    but my path to Your presence.
    
    My pain is my pressing.
    My pressing is my purpose.
    
    And even in my brokenness,
    You're still writing beauty.
    
    2 Corinthians 12:9 —
    "My grace is sufficient for you,
    for My power is made perfect in weakness."
    
    So I'll boast in my weakness.
    I'll stand in my scars.
    
    Because where I was digging for rest,
    You were digging for me.
    
    Now I see —
    rest isn't found in escape.
    It's found in surrender.
    
    Not in running from You,
    but collapsing into You.
    
    So take my pain, Lord.
    Take my fear.
    Take every demon that dares call me theirs.
    
    Because I am Yours.
    
    And in You...
    I find rest.`, 
  },

  {
    id: 3,
    title: "It's So Easy",
    content: `It's so easy...
    So easy to serve God when life feels smooth.
    When the sun is shining,
    and every prayer seems to come with a "yes."
    
    It's easy to lift your hands high
    when joy fills your lungs,
    when peace tucks you in at night,
    and your world feels like a Sunday morning.
    
    But what about the ones who wake up in war...
    not a war outside —
    but the one raging inside their mind?
    
    The ones who smile... just to survive the day,
    whose hearts are cracked from life's heavy blows,
    whose thoughts scream louder than their hope?
    
    What about the ones
    who reach for a bottle just to silence the storm...
    or a needle —
    just to feel something that isn't pain?
    
    What about them?
    The ones we whisper about...
    the ones society calls "broken."
    The ones the world labels "lost."
    
    (But Heaven — Heaven still calls them Mine.)
    
    Because the Bible says,
    "He's close to the brokenhearted,
    and saves those crushed in spirit."
    
    So maybe — just maybe —
    the ones we call too far gone
    are actually the ones standing closest to the throne.
    
    It's easy to serve when life is easy.
    But the truest worship —
    the kind that shakes Heaven,
    and silences hell —
    comes from those who praise through pain.
    
    Who whisper "Thank You..." through tears.
    Who still choose Jesus —
    when life gives them every reason not to.
    
    That's real faith.
    That's real worship.
    
    That's when Heaven leans in close and says...
    "That one — that's Mine."`,
  },

  {
    id: 4,
    title: "The Secret Room",
    content: ` As I sat down, the Lord started to open my eyes. I saw a room filled with illuminating light beaming down on me that I could not see in this world, I saw treasures all over the classroom around the tables and board. A mighty hand stretching towards me to gave me a pen in gold to write my name and then he said to me “welcome to the secret room my daughter’ this where I teach my children hidden things but they must be prepared to receive it, I heard a singing in the back “ Glory glory glory to the Lord’’ it was two angels with two big eyes and three arms rejoicing to the Lord, the first angel was the angel of knowledge and the second was the angel of wisdom.
    Isaiah 6:2–3 (NIV)
    Above Him were seraphim, each with six wings... And they were calling to one another: “Holy, holy, holy is the Lord Almighty; the whole earth is full of His glory.”
    They sat me down with a smile and handed me a book. I noticed the chairs were a form of many lights but shaped in a chair form,the book is brown and it said “top secret” on it with a padlock of Gold. Then the angel said to me you will need this book till the whole course. Then a giant angel walked in and I saw patience in front of its head, I knew it was an angel of patience. The Lord said I need to be equipped by these angels in the course.
    Revelation 10:8–10 (NIV)
    Then the voice that I had heard from heaven spoke to me once more: “Go, take the scroll that lies open in the hand of the angel who is standing on the sea and on the land.” ... So I went to the angel and asked him to give me the little scroll. He said to me, “Take it and eat it.” ... I took the little scroll from the angel’s hand and ate it. It tasted as sweet as honey in my mouth.
    Hebrews 1:14 (NIV)
    Are not all angels ministering spirits sent to serve those who will inherit salvation?
    James 1:4 (NIV)
    Let patience have its perfect work, that you may be perfect and complete, lacking nothing.
    Proverbs 2:6 (NIV)
    For the Lord gives wisdom; from His mouth come knowledge and understanding.
    
     I saw on the board it says “why men cry” and on the right corner “ it says do not be afraid’’ I was confused why, then I saw my book opened and it highlighted my name so big four times “Oluwapelumi” as my pen dropped, the angel of patiences rushed to pick my pen and the Lord said to my thoughts, the angels are there to serve and equip you according to my commands. They don’t slow down, they are fast to redeem but unbelief stop many from receiving their golden pen. Then my eyes turned to examine the two angels sitting next to me. They were recording things in their own book, but their own book was a large white book covered in feathery tips on the outside. Then I saw the lion of Judah and white lion side by side,with a golden lamp on the right. I saw Obedience then Open doors Wisdom Blessings Success.
    Obedience
    Deuteronomy 28:1–2 (NIV)
    If you fully obey the Lord your God and carefully follow all His commands I give you today, the Lord your God will set you high above all the nations on earth. All these blessings will come on you and accompany you if you obey the Lord your God.
    Open Doors Revelation 3:8 (NIV)
    I know your deeds. See, I have placed before you an open door that no one can shut. I know that you have little strength, yet you have kept My word and have not denied My name.
    Wisdom
    Proverbs 4:6–7 (NIV)
    Do not forsake wisdom, and she will protect you; love her, and she will watch over you. The beginning of wisdom is this: Get wisdom. Though it cost all you have, get understanding.
    Malachi 3:10 (NIV)
    “Bring the whole tithe into the storehouse, that there may be food in my house. Test Me in this,” says the Lord Almighty, “and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.”
    Joshua 1:8 (NIV)
    Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful.
    
     Isaiah 1:19 (NIV)
    If you are willing and obedient, you will eat the good things of the land.
    We moved from the class room to a garden, and many roses but theses were gold, and its had all the children of God names, as i worked behind jesus he was sprinkling water on the rose but it wasn't the kind of water from this world, as he sprinkled the water the rose leaves would open up. Then I saw a big fountain of water in front draining down, I noticed there were no angels around the garden, it was only Jesus that was there with me. He said this is my garden where i nurture my children as they cooperate with me, then i see a rose turned black and i asked jesus what it was, he said this when my children passes away,( The lord waters us because we so dear to his heart, he let us grow and flourish and once we die the rose turned black, cause we come to him in spirit. Gardener waters his plants everyday and does not lloose his eyes from the plant. Isaiah 61:3
    Psalm 1:3 (NIV)
    That person is like a tree planted by streams of water, which yields its fruit in season and whose leaf does not wither—whatever they do prospers.
    1 Corinthians 3:6–7 (NIV)
    I planted the seed, Apollos watered it, but God has been making it grow. So neither the one who plants nor the one who waters is anything, but only God, who makes things grow.
    Suddenly i saw a stairs way light on stairs and leading to God throne, its giant throne with with huge leg, but the face was kept away from me, with a huge crown with diamond beads all around and angels were chanting “messiah messiah” but the angels were kept away from my eyes i wasnt the only one there, i saw other children of God bowing down in awe, the glory and power was shocking me from within, then i heard say to me “ my daughter i have called you to serve me right from birth, i have clothed you with love and my beauty’’ then he instructed an angel to bring me a trumpet, then he told me to blow the trumpet seven times,and said to me seven times you will rise, seven times you will preach the gospel seven times you will heal the sick in your generation and seven times you will jump into the worship. And seven angels stood behind me and shouted in rejoice and they all held a sheet of paper and a pen.
    I moved to another section to stairs made with golden stairs, and into a room with golden with gates and there four angels standing dispatching success to the children of God, one by one. They were four gates golden in circles, one gates angel with all white with feathers all around with 4 eyes standing one leg staring at me, and Lord said that’s the angel of open doors and there another angel in the center accepting children’s prayer request and sending to where they
    
     needed to go, I saw the prayers flying into each golden gates. Then rain started to pour down on but I notice I wasn’t get soaked wet, like you would on earth, then the Lord said to me you don’t get rained on here, but that is to show you showers of blessings upon your life, that’s it’s rains on you, I was in awe, then Jesus smiled at me and said come my daughter I want to show how I beautify my children’s life, he grabbed my hand and we went into a place I saw angels like as they were taking really beautiful vases and standing them against the wall, they were painted beautifully! I saw one particular angel bringing one vase that’s had holes, I asked the Lord why, they were holes and old burgundy he said those are believers that gave their life to Christ and as soon as they come into his kingdom they angels move the vase to Lord altar and the presence of God hovers over it and changes to a beautiful vase! And the vase and I notice the angels were stuffing things inside, I kept looking the lord said I can only see my own, I saw them stuffing glory, protection, shine,praise, wisdom, calling, favour, and the rest were hidden from me. I was sitting with bowl of water and he asked me to pour the water out into a big bowl like and he asked me to do keep doing it, and I got frustrated and tired, he asked me, “ why do you think I’m asking to do it all over”, and I said why my Lord . He said I’m teaching you patience and enduring because I’m pouring the water into the bigger bowl it’s not getting full, I was getting tired, I don’t want to keeping pouring Lord, give me strength to pour more, the Lord touched me, and held my hand and carried the bowl with me, by the time I knew it the bowl was filled and a big diamond rose out of it, and he said to me this your reward, I smiled and thought to myself why he asked me to pour the water but I didn’t ask for help when I couldn’t go on anymore. I saw how many Christian’s don’t ask God for help, we do with our own power, which is why we get weary and tired. Then I saw a spirit very dark form walking with black leader like shoes but had no face trying to accuse me he brought a long paper with the list of things I had done, I became afraid immediately, its was talking to the Lord I couldn’t hear what he was saying, but I kept seeing “ accusations” in front of him,I saw paper catching on fire and turned to ashes, I couldn’t comprehend why, but brought this scripture to me “there’s no condemnation in those who are in Christ”
    Then he took my spirit up and I saw someone washing Jesus feet with happy spirit and I wanted to join them but it’s wasn’t my turn yet, everyone was taking turns and they were doing with happiness in their heart, it’s was finally my turn, and he ask me “ do I truly love him” I said yes of course, then he said show me by your services to me,meaning being a servant to him. He said those you saw washing my feet was a symbols of their services to me, and they do it’s with happiness and not grumbling.( proverbs 28:20) “suffering will come but who will stand with the Lord till the end, I heard an angel all white holding a staff/rod at very top and it’s yelled it out in a calm strong voice. Will you still wash his feet even it’s get too hot? Another angel said in the left corner with large circle eyes turning back and forth. Jesus gave me a towel to wipe his feet and I love your my daughter and I know you will serve me well, don’t forget these things I’m showing you, use as additional map to guide your life cautiously. I started weeping before the Lord, he still humble as he picked up the towel to give to me, I couldn’t comprehend how loving this Jesus is......then I saw an angel suited up up with a sword on its right side walking towards the Lord throne with a list and the top says “saved” and a check mark to each names, Go and minister to the rest and watch them closely , the angel obeyed and left with striking lightning power. I saw a women coming towards the throne of God with a baby on her hand, it look as if
    
     the baby was been dedicated to him,then I saw myself standing in front and the glory of God was hovering over me bright light and I saw an angel with eyes all around.
    `,
  },
];

export default function SinglePoem() {
  const { id } = useParams();
  const poem = poems.find((p) => p.id === Number(id));

  if (!poem) return <p className="p-10">Poem not found</p>;

  return (
    <div className="bg-[#FAF7F2] text-[#5A4A42] min-h-screen">

      {/* NAVBAR */}
      <Navbar customBg={eye} />

      {/* TOP IMAGE */}
      

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">

        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-[#4B3F36]">
          {poem.title}
        </h1>

        <p className="whitespace-pre-line leading-relaxed text-lg">
          {poem.content}
        </p>

      </div>
    </div>
  );
}