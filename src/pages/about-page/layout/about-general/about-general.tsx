import { type FC } from 'react'

import { Section } from 'src/components/section/section'
import { renovatedObject, galleryContent } from './consts'
import authorImage from 'src/assets/img/history-author.png'
import styles from './index.module.scss'

export const AboutGeneral: FC = () => {
	return (
		<div className={styles.aboutGeneral}>
			<h2>Об Обществе</h2>

			<section className={styles.blockquote}>
				<img src={authorImage} alt='Г. И.Маланичева, Почетный Председатель ВООПИиК' />

				<blockquote>
					<p>
						«Одно из незабываемых воспоминаний моей жизни. Представьте: русская глубинка семидесятых
						годов, в центре села — старая деревянная церковь, а в воздухе разливается фольклорная
						песня. Ощущение непередаваемое — ощущение праздника, я тогда поняла, что вот оно,
						родное, настоящее, подлинное. Такое ощущение у меня возникало и еще один раз — в
						Замоскворечье, в восьмидесятых. Я почувствовала непрерывность времен, и это просто
						потрясло меня. Спасая церкви, усадьбы, документы, мы сохраняем нечто большее, чем просто
						стены, убранство, памятники материальной культуры, мы сохраняем русскую душу. И это
						самое главное».
					</p>

					<footer>Г. И.Маланичева, Почетный Председатель ВООПИиК</footer>
				</blockquote>
			</section>

			<Section title='Объекты культурного наследия, которые отреставрированы за счет средств общества'>
				<ul className={styles.linkList}>
					{' '}
					{renovatedObject.map((item) => (
						<li key={item.id}>
							<a href='#'>{item.title}</a>
						</li>
					))}
				</ul>
			</Section>

			<Section title='Фотогалерея'>
				<ul className={styles.gallery}>
					{' '}
					{galleryContent.map((item) => (
						<li key={item.id}>
							<figure className={styles.image}>
								<img src={item.imgTitle} alt={item.imgDescription} />
								<figcaption>{item.imgDescription}</figcaption>
							</figure>
						</li>
					))}
				</ul>
			</Section>

			<section>
				<h4>Что такое ВООПИиК?</h4>

				<p>
					Всероссийское общество охраны памятников истории и культуры— добровольная самоуправляемая
					общественная организация, обладающая полной финансовой самостоятельностью и осуществляющая
					свою деятельность на большей части территории Российской Федерации.{' '}
					<a href='#'>Отделения ВООПИиК</a> в субъектах Российской Федерации являются его
					структурными подразделениями, действующими на основании единого Устава,
					зарегистрированного Министерством юстиции России (
					<a href='#'>Свидетельство о регистрации № 340 от 24.10.2002</a>).
				</p>

				<p>
					Решение об организации Всероссийского общества охраны памятников истории и культуры
					(ВООПИиК) было принято Советом министров РСФСР в 1965 г. (Постановление № 882 от
					23.07.1965). В июне 1966 г. состоялся <a href='#'>Учредительный съезд ВООПИиК</a>. <br />{' '}
					На протяжении уже более чем пятидесяти лет Общество осуществляет деятельность по охране,
					сбережению, популяризации и использованию{' '}
					<a href='#'>историко-культурного наследия России</a>. Усилиями Общества были сохранены
					тысячи материальных и духовных шедевров, принадлежащих стране и ее гражданам, среди
					которых и отдельные архитектурные шедевры, и усадебные комплексы, и духовные святыни,
					являющиеся бесценным достоянием народов Российской Федерации и одной из основ российской
					культуры и традиции.
				</p>

				<p>
					Членами Общества могут быть как организации, так и частные лица. Высшим органом является
					съезд, созываемый один раз в 5 лет. В период между созывами съездов работой Общества
					руководит Центральный совет.Постоянно действующим органом управления Общества является его
					Президиум, возглавляемый Председателем Центрального совета. В состав Президиума,
					избранного входят известные деятели науки, литературы, искусства — архитекторы, историки,
					искусствоведы, реставраторы. <br /> Высокопрофессиональная общественная экспертиза,
					проводимая ВООПИиК, является необходимым дополнением в решении вопросов сохранения
					наследия специально уполномоченными государственными органами охраны памятников истории и
					культуры Российской Федерации.
				</p>

				<p>
					При Центральном совете и региональных отделениях работу по различным направлениям
					сохранения материального и духовного наследия ведут около 200 секций и комиссий. <br /> За
					время своей деятельности Общество вложило в охрану и восстановление памятников истории и
					культуры более <b>10,5 млрд. рублей</b> внебюджетных средств.
				</p>

				<p>
					В последние годы наблюдается заметное оживление работы Центрального совета Общества и его
					отделений. Начался процесс возрождения закрывшихся в связи с финансовыми трудностями
					отделений. Вновь создаются городские, районные, областные, краевые и республиканские
					отделения. <br /> Общество доказывает возможность активной деятельности даже без
					соответствующей государственной поддержки, которая была в годы его становления и развития.
				</p>

				<p>
					Общество продолжает оставаться самой массовой специализированной общественной
					организацией, которая оказывает эффективное влияние на сохранение наследия истории и
					культуры и на формирование бережного отношения к памятникам. <br /> В 1980 г. ВООПИиК
					зарегистрировало свой печатный орган — альманах «Памятники Отечества». Каждый выпуск
					альманаха посвящен национальной культуре и истории России: «Мир русской усадьбы», «Быль
					монастырская», «Вера, Надежда, Любовь (женщины России)», «Под Андреевским флагом»,
					«Возрожденные святыни Москвы» и др., серия «Вся Россия» — «Земля Ставропольская»,
					«Колыбель России» (Владимирская область), «Первая столица Сибири» (Тобольск) и др., серия
					«Музеи России» — «Поленово», «Наследие земли Смоленской» и др.
				</p>
			</section>
		</div>
	)
}
