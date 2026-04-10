import Link from "next/link";
import { BangladeshFlag, USFlag } from "@/components/ui/CountryFlags";

export const metadata = {
  title: "National Anthems | BanglaRTP",
  description:
    "The national anthems of Bangladesh and the United States — honoring both our heritage and our home in the Research Triangle.",
};

export default function AnthemsPage() {
  return (
    <div className="page-container py-12">
      {/* Header */}
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <div className="flex justify-center items-center gap-4 mb-6">
          <BangladeshFlag className="h-16 rounded-lg shadow-md border border-gray-200 dark:border-gray-700" />
          <span className="text-3xl">🤝</span>
          <USFlag className="h-16 rounded-lg shadow-md border border-gray-200 dark:border-gray-700" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-3">
          National Anthems
        </h1>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          BanglaRTP celebrates the heritage of Bangladesh and the home we have built in the
          United States. These are the anthems of both our nations.
        </p>
      </div>

      <div className="space-y-16 max-w-3xl mx-auto">

        {/* ── Bangladesh ─────────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <BangladeshFlag className="h-12 rounded-md shadow border border-gray-200 dark:border-gray-700 shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                আমার সোনার বাংলা
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Amar Shonar Bangla — National Anthem of Bangladesh
              </p>
            </div>
          </div>

          {/* Video */}
          <div className="rounded-2xl overflow-hidden mb-6 aspect-video bg-gray-100 dark:bg-gray-900">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/xGlT_kiC7is"
              title="Amar Shonar Bangla — Bangladesh National Anthem"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Lyrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bangla */}
            <div className="card">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                বাংলা — Original
              </h3>
              <div className="font-bangla text-lg leading-loose text-gray-800 dark:text-gray-200 whitespace-pre-line">
{`আমার সোনার বাংলা, আমি তোমায় ভালোবাসি
চিরদিন তোমার আকাশ, তোমার বাতাস, আমার প্রাণে বাজায় বাঁশি।
ও মা, ফাগুনে তোর আমের বনে ঘ্রাণে পাগল করে,
মরি হায়, হায় রে—
ও মা, অঘ্রানে তোর ভরা ক্ষেতে আমি কী দেখেছি মধুর হাসি।`}
              </div>
            </div>

            {/* English transliteration + translation */}
            <div className="space-y-5">
              <div className="card">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Transliteration
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic whitespace-pre-line">
{`Amar shonar Bangla, ami tomay bhalobashi
Chirodin tomar akash, tomar batas, amar prane bajay banshi.
O ma, fagune tor amer bone ghrane pagol kore,
Mori hay, hay re—
O ma, Agrhane tor bhora khete ami ki dekhechi modhur hashi.`}
                </p>
              </div>
              <div className="card">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  English Translation
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
{`My Bengal of gold, I love you
Forever your skies, your air set my heart in tune
As if it were a flute.
In spring, O mother mine, the fragrance from
Your mango groves makes me wild with joy—
Ah, what a thrill!
In autumn, O mother mine,
In the full-blossomed paddy fields
I have seen spread all over sweet smiles.`}
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Written by Rabindranath Tagore, 1905. Adopted as the national anthem of Bangladesh in 1972.
          </p>
        </section>

        {/* ── United States ───────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <USFlag className="h-12 rounded-md shadow border border-gray-200 dark:border-gray-700 shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                The Star-Spangled Banner
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                National Anthem of the United States of America
              </p>
            </div>
          </div>

          {/* Video */}
          <div className="rounded-2xl overflow-hidden mb-6 aspect-video bg-gray-100 dark:bg-gray-900">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vPKp29Luryc"
              title="The Star-Spangled Banner — US National Anthem"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Lyrics */}
          <div className="card">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
              First Verse
            </h3>
            <p className="text-gray-800 dark:text-gray-200 leading-loose whitespace-pre-line">
{`O say can you see, by the dawn's early light,
What so proudly we hailed at the twilight's last gleaming,
Whose broad stripes and bright stars through the perilous fight,
O'er the ramparts we watched, were so gallantly streaming?
And the rocket's red glare, the bombs bursting in air,
Gave proof through the night that our flag was still there;
O say does that star-spangled banner yet wave
O'er the land of the free and the home of the brave?`}
            </p>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Written by Francis Scott Key, September 14, 1814. Adopted as the US national anthem in 1931.
          </p>
        </section>

      </div>

      {/* Footer CTA */}
      <div className="mt-16 rounded-2xl bg-gradient-to-r from-brand-green to-teal-600 p-8 text-white text-center max-w-3xl mx-auto">
        <p className="font-bangla text-2xl mb-1">আমাদের জন্য, আমাদের দ্বারা</p>
        <p className="text-green-100 text-sm mb-4">&ldquo;By us, for us&rdquo;</p>
        <Link href="/" className="inline-flex items-center gap-2 bg-white text-brand-green font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-green-50 transition-colors">
          Back to BanglaRTP →
        </Link>
      </div>
    </div>
  );
}
