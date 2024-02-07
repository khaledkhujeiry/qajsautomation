function countFriday13(startDate) {
    let currentDate = new Date();  // Получаем сегодняшнюю дату
    let count = 0;
    
    // Создаем копию стартовой даты
    let tempDate = new Date(startDate);
  
    // Вычисляем количество дней между начальной и сегодняшней датами
    let daysDiff = Math.ceil((currentDate - tempDate) / (1000 * 60 * 60 * 24));
  
    // Проходим по каждому дню с начальной даты до сегодняшнего дня
    for (let i = 0; i <= daysDiff; i++) {
      if (tempDate.getDate() === 13 && tempDate.getDay() === 5) {
        count++;
      }
      tempDate.setDate(tempDate.getDate() + 1); // Переходим к следующему дню
    }
    return count;
  }
  
  // Использование функции
  let startDate = new Date(2023, 0, 1);  // Задаем начальную дату
  let totalFridays = countFriday13(startDate);
  console.log(`Количество пятниц 13-го с ${startDate.toDateString()} до сегодняшнего дня: ${totalFridays}`);