import { useState } from 'react'
import {
  DocumentIcon, AiSparkIcon, PhoneDownloadIcon, IdIcon,
  CheckCircleIcon,
} from '../components/Icon'
import PageHero from '../components/PageHero'
import FinalCta from '../components/FinalCta'
import { useScrollReveal } from '../hooks/useScrollReveal'

const criteres = [
  'Âge minimum 18 ans',
  'Numéro de téléphone actif',
  'Compte Mobile Money',
  'Identité vérifiée',
  'Résidence UEMOA',
]

const avantages = [
  'Sans garantie physique',
  "Sans demande d'emploi",
  'Scoring instantané',
  'Décaissement 15 min',
  'Taux transparent',
]

const steps = [
  { Icon: PhoneDownloadIcon, title: 'Télécharger', desc: 'App Store / Google Play' },
  { Icon: IdIcon, title: 'Vérifier', desc: 'ID + téléphone (5 min)' },
  { Icon: AiSparkIcon, title: 'Scorer', desc: 'IA analyse (1 min)' },
  { Icon: CheckCircleIcon, title: 'Décaisser', desc: 'Fonds reçus (15 min)' },
]

export default function NanoCredit() {
  useScrollReveal()
  const [simDur, setSimDur] = useState(1)
  const [simAmount, setSimAmount] = useState(10000)

  const rates = { 1: 0.1, 2: 0.15, 3: 0.2, 4: 0.25 }
  const interest = Math.round(simAmount * rates[simDur as keyof typeof rates])
  const total = simAmount + interest

  return (
    <>
      <PageHero
        breadcrumb="Accueil / Nano-Crédit"
        title="Nano-Crédit Mobile"
        desc="Crédit instantané sans garantie, remboursement flexible"
      />

      <section className="bg-white py-24 px-[5%]">
        <div className="container-tp">

          {/* SIMULATION */}
          <div className="mb-20">
            <h2 className="section-title mb-9">Simulation de crédit</h2>
            <div className="bg-g50 rounded-3xl p-9" data-reveal>
              <div className="grid md:grid-cols-2 gap-9">
                <div>
                  <span className="block text-g600 text-xs mb-2.5">Montant souhaité</span>
                  <div className="font-display font-extrabold text-[34px] text-navy mb-2.5">
                    {simAmount.toLocaleString('fr-FR')} <span className="text-[15px] text-g400 font-medium">FCFA</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    value={simAmount}
                    onChange={(e) => setSimAmount(Number(e.target.value))}
                    className="w-full accent-teal cursor-pointer mb-1"
                  />
                  <div className="flex justify-between text-g400 text-xs">
                    <span>1 000</span><span>20 000</span>
                  </div>
                  <div className="mt-6">
                    <span className="block text-navy text-xs mb-2.5">Durée de remboursement</span>
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map(d => (
                        <button
                          key={d}
                          className={`text-xs font-semibold rounded-lg py-2.5 transition-colors duration-200 ${
                            d === simDur ? 'bg-navy text-white' : 'bg-g100 text-navy hover:bg-g100/70'
                          }`}
                          onClick={() => setSimDur(d)}
                        >
                          {d === 1 ? '1 sem' : d === 2 ? '2 sem' : d === 3 ? '3 sem' : '1 mois'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-navy to-[#1a3a8f] rounded-2xl p-6 text-white">
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <div className="text-white/65 text-xs mb-1">Montant emprunté</div>
                    <div className="text-2xl font-bold">{simAmount.toLocaleString('fr-FR')} FCFA</div>
                  </div>
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <div className="text-white/65 text-xs mb-1">Taux d'intérêt</div>
                    <div className="text-xl font-bold">{(rates[simDur as keyof typeof rates] * 100).toFixed(0)}%</div>
                  </div>
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <div className="text-white/65 text-xs mb-1">Intérêts</div>
                    <div className="text-xl font-bold">{interest.toLocaleString('fr-FR')} FCFA</div>
                  </div>
                  <div className="bg-teal/20 p-4 rounded-xl">
                    <div className="text-white/65 text-xs mb-1">Total à rembourser</div>
                    <div className="text-[28px] font-bold text-teal">{total.toLocaleString('fr-FR')} FCFA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONDITIONS */}
          <div className="mb-20">
            <h2 className="section-title mb-9">Conditions d'accès</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-g100 p-7" data-reveal>
                <div className="text-teal mb-3.5"><DocumentIcon size={26} /></div>
                <h4 className="font-display font-bold text-navy text-lg mb-4">Critères obligatoires</h4>
                <ul className="list-none flex flex-col">
                  {criteres.map((c, i) => (
                    <li key={i} className="flex items-center gap-2.5 py-2 border-b border-g100 last:border-0 text-g600 text-sm">
                      <CheckCircleIcon size={15} strokeWidth={2.2} className="text-teal shrink-0" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy rounded-2xl p-7" data-reveal data-reveal-delay="1">
                <div className="text-lime mb-3.5"><AiSparkIcon size={26} /></div>
                <h4 className="font-display font-bold text-white text-lg mb-4">Avantages TOVPAY</h4>
                <ul className="list-none flex flex-col">
                  {avantages.map((a, i) => (
                    <li key={i} className="flex items-center gap-2.5 py-2 border-b border-white/10 last:border-0 text-white/75 text-sm">
                      <CheckCircleIcon size={15} strokeWidth={2.2} className="text-lime shrink-0" /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* PROCESSUS */}
          <div>
            <h2 className="section-title mb-9">Processus d'obtention</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s, i) => (
                <div
                  key={i}
                  data-reveal
                  data-reveal-delay={String(i)}
                  className="bg-g50 rounded-2xl border border-g100 p-7 text-center relative transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:bg-white"
                >
                  <div className="absolute top-4 right-4 font-display font-extrabold text-3xl text-g100">{i + 1}</div>
                  <div className="text-teal flex justify-center mb-3 relative z-10">
                    <s.Icon size={26} />
                  </div>
                  <h4 className="font-display font-bold text-navy text-base mb-2">{s.title}</h4>
                  <p className="text-g600 text-[13px] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        title="Votre crédit vous attend."
        desc="Téléchargez l'app, vérifiez votre identité, recevez vos fonds en 15 minutes."
        primary={{ label: "Télécharger l'app", to: '/services' }}
        secondary={{ label: 'Voir la FAQ →', to: '/faq' }}
      />
    </>
  )
}
